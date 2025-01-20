<template>
  <section class="top">
  <div class="container">
    <div class="top__wrapper">
    <h2 class="top__title">Популярные на Cinema</h2>
    <div class="top__buttons">
    <button @click="handleClickPrev":disabled="!swiperRef || swiperRef.activeIndex === 0" class="btn-reset custom-button-prev-serial"></button>
        <button @click="handleClickNext" :disabled="!swiperRef || swiperRef.isEnd" class="btn-reset custom-button-next-serial"></button>
      </div>
      </div>
    <CommonSlider :slidesperview="6" @instance="setSwiperInstance" :slide-card="loadFilm.topFilm.value" custom-button-next="custom-button-next-serial" custom-button-prev="custom-button-prev-serial" >
      <template #slide="{ item }">
      <div class="top__img-wrapper">
        <NuxtLink :to="`/movie/${item.id}`" class="top__img-wrapper">
    <img class="top__img" :src="item.poster?.url" alt="Poster">
</NuxtLink>
  </div>
    </template></CommonSlider>
  </div>
  </section>
</template>

<script lang="ts" setup>
import { useLoadHome } from '~/composables/useLoadHome';
const swiperRef = ref<any>(null);
const handleClickPrev = () => {
  if (swiperRef.value) {
    swiperRef.value.slidePrev();
  }
};

const loadFilm = await useLoadHome();
const handleClickNext = () => {
  if (swiperRef.value) {
    swiperRef.value.slideNext();
  }
};

const setSwiperInstance = (instance: any) => {
  swiperRef.value = instance;
}

</script>

<style lang="scss" scoped>
.top {
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
  &__rating-wrapper {
    width: 100%;
    position: absolute;
    left: 10px;
    bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: baseline;
    gap: 5px;
  }
}
.custom-button-prev-serial {
background-image: url('/img/Prev.png');
background-repeat: no-repeat;
background-size: cover;
width: 40px;
height: 40px;
  }
  .custom-button-next-serial {
background-image: url('/img/Next.png');
background-repeat: no-repeat;
background-size: cover;
width: 40px;
height: 40px;
  }

  .top button:disabled {
  opacity: 0.5;
}
</style>