// import { defineStore } from 'pinia'
// import type { Movie, MovieResponse } from '~/types/app'
// import { repositoryApi } from '~/utils/repository'


// export const useMyStoreStore = defineStore('store', () => {

// const { $apiFilms } = useNuxtApp()
// const useRepo = repositoryApi($apiFilms)
  
// const films = ref<Movie[]>([])
// const top = ref<Movie[]>([])
// const oneFilm = ref({} as Movie);

// const fetchFilms  = async () => {
// try {
//   const response: MovieResponse = await useRepo.films()
//     films.value = response.docs
// } catch (error) {
//   console.error('Error fetching films')
// }
// }

// const fetchTop  = async () => {
//   try {
//     const response: MovieResponse = await useRepo.top()
//       top.value = response.docs
  
// } catch (error) {
//     console.error('Error fetching top')
//   }
// }

// const fetchMovieById = async (id: number) => {
//   try {
//     const response = await useRepo.getMovieById(id);
//     oneFilm.value = response
//   } catch (error) {
//     console.error('Error fetching movie with ID');
//   }
// };
// return {
//   films,
//   fetchFilms,
//   fetchTop,
//   top,
//   fetchMovieById,
//   oneFilm
// }
// })
