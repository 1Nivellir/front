<template>
  <section class="popular">
    <div class="container">
      <div class="popular__wrapper">
        <h2 class="popular__title">Популярные фильмы</h2>
        <div class="popular__buttons">
          <button
            @click="handleClickPrev"
            :disabled="!swiperRef || swiperRef.activeIndex === 0"
            class="btn-reset custom-button-prev-flim"
          ></button>
          <button
            @click="handleClickNext"
            :disabled="!swiperRef || swiperRef.isEnd"
            class="btn-reset custom-button-next-flim"
          ></button>
        </div>
      </div>
      <CommonSlider
        @instance="setSwiperInstance"
        :slidesperview="6"
        :slide-card="popularFilm"
        custom-button-next="custom-button-next-flim"
        custom-button-prev="custom-button-prev-flim"
      >
        <template #slide="{ item }">
          <NuxtLink :to="`/movie/${item.id}`" class="popular__img-wrapper">
          <div class="popular__img-wrapper">
    <img class="popular__img" :src="item.poster.url" alt="Poster1">
<div class="popular__rating-wrapper"><img class="popular__rating-img" src="/img/rating.png" alt="Star"><span class="popular__rating-text">{{ item.rating.kp }}</span></div>
  </div>
  </NuxtLink>
        </template>
      </CommonSlider>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import { useMyStoreStore } from '~/stores/store';

const store = useMyStoreStore();
const popularFilm = computed(() => store.films);

const swiperRef = ref<any>(null);

const handleClickPrev = () => {
  if (swiperRef.value) {
    swiperRef.value.slidePrev();
  }
};

const handleClickNext = () => {
  if (swiperRef.value) {
    swiperRef.value.slideNext();
  }
};

const setSwiperInstance = (instance: any) => {
  swiperRef.value = instance;
};

onMounted(async () => {
 await store.fetchFilms();
});
console.log(
  popularFilm
)
</script>

<style lang="scss" scoped>
.popular {
  padding: 0 0 90px 0;
  &__title {
    font-family: 'Akrobat';
    font-style: normal;
    font-size: 40px;
    font-weight: 400;
    color: #fff;
  }
  &__wrapper {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
  }
  &__buttons {
    display: flex;
    gap: 10px
  }
  &__img {
  position: relative;
  border-radius: 20px;
  width: 100%;
  height: 280px;
  opacity: 0.9;
}
  &__rating-img {
    width: 22px;
    height: 22px;
  }
  &__rating-text {
    display: block;
    font-family: 'Akrobat';
    font-style: normal;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
  }
  &__img-wrapper {
    position: relative;
  }
  &__rating-wrapper {
    width: 100%;
    position: absolute;
    left: 10px;
    bottom: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
  }
}
.custom-button-prev-flim {
background-image: url('/img/Prev.png');
background-repeat: no-repeat;
background-size: cover;
width: 40px;
height: 40px;
  }
  .custom-button-next-flim {
background-image: url('/img/Next.png');
background-repeat: no-repeat;
background-size: cover;
width: 40px;
height: 40px;
  }

  .popular button:disabled {
  opacity: 0.5;
}
</style>