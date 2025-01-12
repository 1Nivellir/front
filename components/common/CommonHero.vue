<template>
  <section class="hero">
    <div class="hero__wrapper">

      <div class="hero__block-1">
        <img class="hero__poster" :src="film.poster?.url" alt="Poster">
        <div class="hero__rating-wrapper">
          <div class="hero__rating-wrapper-2"><CommonIcons class="hero__rating-img" icon-name="Kp"/><span class="hero__rating-text"> {{ film.rating?.kp }}</span></div>
          <div class="hero__rating-wrapper-2"><CommonIcons class="hero__rating-img" icon-name="Imdb"/><span class="hero__rating-text">{{ film.rating?.imdb }}</span></div>
        </div>
      </div>
      <div class="hero__block-2">
        <h1 class="hero__title">{{ film.name }}</h1>
        <div class="hero__text-wrapper"><span class="hero__text">Год:</span><span class="hero__text">{{ film.year }}</span></div>
        <div class="hero__text-wrapper"><span class="hero__text">Страна:</span><span v-for="(item, index) in film.countries" :key="index" class="hero__text">{{ item.name }}</span></div>
      </div>
    
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { Movie } from '~/types/app';

defineProps<{
  film: Movie
}>()
</script>

<style lang="scss" scoped>
.hero {
  padding: 90px 0;
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 30px;
  }
  &__poster {
    border-radius: 20px;
    max-width: 100%;
    height: auto;
  }
  &__block-1 {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &__rating-img {
    width: 24px;
    height: 24px;
  }
  &__rating-wrapper {
    display: flex;
    gap: 40px;
    justify-content: center;
    align-items: center;
  }
  &__rating-wrapper-2 {
    display: flex;
    gap: 10px;
    align-items: center;
  }
&__rating-text {
  font-family: 'Akrobat';
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
}
&__title {
  margin-bottom: 30px;
  font-family: 'Akrobat';
  font-style: normal;
  font-size: 40px;
  font-weight: 400;
  color: #fff;
}
&__block-2 {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
&__text{
  font-family: 'Akrobat';
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
}
&__text-wrapper {
  display: flex;
  gap: 10px;
  align-items: center;
}}
</style>