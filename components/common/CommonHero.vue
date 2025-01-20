<template>
  <section class="hero">
    <div class="hero__wrapper">
      <div class="hero__block-1">
        <img class="hero__poster" :src="film.poster.url" alt="Poster">
        <div class="hero__rating-wrapper">
          <div class="hero__rating-wrapper-2"><CommonIcons class="hero__rating-img" icon-name="Kp"/><span class="hero__rating-text"> {{ film.rating?.kp }}</span></div>
          <div class="hero__rating-wrapper-2"><CommonIcons class="hero__rating-img" icon-name="Imdb"/><span class="hero__rating-text">{{ film.rating?.imdb }}</span></div>
        </div>
      </div>
      <div class="hero__block-2">
        <div class="hero__title-wrapper"><h1 class="hero__title">{{ film.name }}</h1>        <CommonButtons /></div> 
        <div class="hero__text-wrapper"><span class="hero__text hero__text-right">Год:</span><span class="hero__text">{{ film.year }}</span></div>
        <div class="hero__text-wrapper"><span class="hero__text hero__text-right">Страна:</span><span v-for="(item, index) in film.countries" :key="index" class="hero__text">{{ item.name }}</span></div>
        <div class="hero__text-wrapper"><span class="hero__text hero__text-right">Страна:</span><span v-for="(item, index) in film.genres" :key="index" class="hero__text">{{ item.name }} <span class="hero__slesh" v-if="index < film.genres.length - 1">, </span></span></div>
        <div class="hero__text-wrapper"><span class="hero__text hero__text-right">В ролях актеры:</span><span v-for="(item, index) in film.persons" :key="index" class="hero__text">{{ item.name }} <span class="hero__slesh" v-if="index < film.persons.length - 1">, </span></span></div>
        <div class="hero__text-wrapper"><span class="hero__text hero__text-right">Описание "{{ film.name }}":</span><p class="hero__text">{{ film.description }}</p></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { Movie } from '~/types/app';

defineProps<{
  film: any
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
  &__title-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
&__text-right {
  padding-right: 10px;
  font-weight: 700;
  font-size: 18px;
}
&__buttons {
  display: flex;
  gap: 15px;
}
&__btn {
  color: #fff;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 10px 10px 10px 30px;
  position: relative;
  &:hover {
    background-color: #fff;
    color: #000;
  }
  &:hover .buttons__text {
    color: #000;
  }
}
&__button {
  position: relative;
}
&__button-img {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  width: 20px;
  height: auto;
}
&__slesh {
    padding-right: 5px;
  }}
</style>