
import type { Movie, MovieResponse } from '~/types/app';

export const useLoadHome = async () => {
  const recommendList = ref<Movie[]>([])
  const topFilm = ref<any[]>([]);
  const getRecommend = async () => {
    try {
      const response = await useCustomFetch<'', MovieResponse>('movie', {
        method: 'GET',
        query: {
          page: 1,
          limit: 5,
          id: [689, 688, 322, 8408, 48356],
        },
      });
      recommendList.value = response.docs;  
  } catch (err) {
      console.error('Ошибка клиентской загрузки данных:', err);
    }
  };
  const getFilm = async () => {
    try {
      const response = await useCustomFetch<'', any>('movie', {
        method: 'GET',
        query: {
          page: 1,
          limit: 10,
          notNullFields: ['top10', 'poster.url'],
        },
      });
      topFilm.value = response.docs
  
    } catch (err) {
      console.error('Ошибка клиентской загрузки данных:', err);
    }
  }

  await Promise.all([ getRecommend(), getFilm()])

  return {
    recommendList,
    topFilm
  }
}
