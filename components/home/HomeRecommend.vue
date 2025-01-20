<template>
  <section class="recommend">
    <div class="container">
      <div class="recommend__wrapper-title">
        <h2 class="recommend__title">Cinema рекомендует</h2>
        <div class="recommend__buttons">
          <button
            @click="handleClickPrev"
            class="btn-reset custom-button-prev-rek"
          ></button>
          <button
            @click="handleClickNext"
            class="btn-reset custom-button-next-rek"
          ></button>
        </div>
      </div>
      <div class="recommend__wrapper">
        <div class="recommend__wrapper-left">
          <div class="recommend__wrapper-2">
            <h3 class="recommend__subtitle">
              {{ Recommend[currentIndex]?.name }}
            </h3>
            <p class="recommend__discription">
              {{ Recommend[currentIndex]?.description }}
            </p>
          </div>
          <CommonButtons />
        </div>
        <div class="recommend__wrapper-right">
          <CommonSlider
            :loop="true"
            @realIndex="handleSlideChange"
            @instance="setSwiperInstance"
            :slidesperview="4"
            :slide-card="Recommend"
            :slidespergroup="1"
            custom-button-next="custom-button-next-rek"
            custom-button-prev="custom-button-prev-rek"
          >
            <template #slide="{ item, index }">
              <div class="recommend__img-wrapper">
                <NuxtLink :to="`/movie/${item.id}`" class="recommend__img-wrapper">
                  <img class="recommend__img" :src="item.poster.url" alt="Poster" />
                </NuxtLink>
              </div>
            </template>
          </CommonSlider>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { Movie, MovieResponse } from '~/types/app';
const currentIndex = ref(0);
const swiperRef = ref<any>(null);

const setSwiperInstance = (instance: any) => {
  swiperRef.value = instance;
};

const handleClickPrev = () => {
  swiperRef.value?.slidePrev();
};

const handleClickNext = () => {
  swiperRef.value?.slideNext();
};

const handleSlideChange = (index: number) => {
  currentIndex.value = index;
};

const Recommend = ref<MovieResponse[]>([]);

const getRecommend = async () => {
  try {
    const response = await useCustomFetch<string>('movie', {
      method: 'GET',
      query: {
        page: 1,
        limit: 5,
        id: [689, 688, 322, 8408, 48356],
      },
    });
Recommend.value = response.docs;  
} catch (err) {
    console.error('Ошибка клиентской загрузки данных:', err);
  }
};

await useAsyncData('recommendedMovies', () => getRecommend());
</script>



<style lang="scss" scoped>
.recommend {
  padding: 50px 0;
  width: 100%;
  min-height: 600px;
  &__wrapper-title {
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
  }
  &__title {
    margin-bottom: 20px;
    font-family: 'Akrobat';
    font-style: normal;
    font-size: 35px;
    font-weight: 400;
    color: #fff;
  }
  &__wrapper {
    display: grid;
    grid-template-columns: 30% 67%;
    gap: 3%;
  }
  &__img {
    border-radius: 20px;
    width: 100%;
    height: 280px;
  }
  &__buttons {
    display: flex;
    gap: 10px
  }
 
  &__subtitle {
    margin-bottom: 20px;
    font-family: 'Akrobat';
    font-style: normal;
    font-size: 35px;
    font-weight: 700;
    color: #fff;
  }
  &__discription {
    font-family: 'Akrobat';
    font-style: normal;
    font-size: 15px;
    font-weight: 500;
    color: #fff;
  }
  &__wrapper-2 {
    margin-bottom: 20px;
  }
}
.active-slide {
    border: 2px solid #00925D;
    border-radius: 20px;
  }
.custom-button-prev-rek {
  background-image: url('/img/Prev.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 40px;
  height: 40px;
}
.custom-button-next-rek {
  background-image: url('/img/Next.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 40px;
  height: 40px;
}
.recommend button:disabled {
  opacity: 0.5;
}
</style>
