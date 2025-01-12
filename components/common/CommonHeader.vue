<template>
  <header
    class="header"
    :style="{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 50%, #0D0C0F), url(${slide[currentSlide].poster})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
    <div class="container">
      <div class="header__wrapper">
        <h1 class="header__title">Cinema</h1>
        <nav class="header__nav">
          <ul class="header__list list-reset">
            <li class="header__item" v-for="(item, index) in items" :key="index">
              <NuxtLink class="header__link" :to="item.link">{{ item.title }}</NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="header__search">
          <input
            class="header__search-input"
            type="text"
            placeholder="Поиск по названию"
          />
          <button class="header__search-btn">Поиск</button>
        </div>
      </div>
      <Swiper
        :modules="[Pagination, Autoplay]"
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :slides-per-view="1"
        space-between="300"
        @slideChange="onSlideChange"
      >
        <SwiperSlide v-for="(item, index) in slide" :key="index">
          <div class="header__wrapper-2">
            <h2 class="header__title-poster">{{ item.title }}</h2>
            <p class="header__discription-poster">{{ item.description }}</p>
            <CommonButtons />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

const slide = sliderHeader;
const items = headerItems
const currentSlide = ref(0);
const onSlideChange = (swiper: any) => {
  currentSlide.value = swiper.realIndex;
};
</script>

<style lang="scss" scoped> 

.header {
 min-height: 100vh;
width: 100%;
&__wrapper {
  padding: 50px 0 40vh 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
&__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
&__wrapper-2 {
  max-width: 600px;
}
  &__title {
    color: #FFF;
font-family: 'Akrobat';
font-size: 18px;
font-style: normal;
font-weight: 700;
  }
  &__list {
    display: flex;
    gap: 40px  
  }
  &__link {
    color: #FFF;
font-family: 'Akrobat';
font-size: 18px;
font-style: normal;
font-weight: 700;
text-transform: uppercase;
text-decoration: none;
position: relative;
transition: color 0.3s ease, transform 0.3s ease;
&:hover {
    color: #f0a500;
    transform: scale(1.1);
  }
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #f0a500;
    transition: width 0.3s ease;
  }
  &:hover:after {
    width: 100%;
  }
  }
  &__search {
    display: flex;
    gap: 5px
  }
  &__search-input {
    background: #fff;
    border-radius: 5px;
    border: none;
    color: black;
    font-size: 15px;
    font-weight: 700;
    outline: 1px solid transparent;
    padding: 10px 0 10px 10px;
    min-width: 350px;
    max-height: 30px;
    transition: outline 0.3s ease-in-out;
    &:focus {
      outline: 1px solid #01304d;
    }
  }
  &__search-btn {
    background: #d4d5d5;
    padding: 5px 15px;
    color: black;
    font-size: 14px;
    font-weight: 700;
    border-radius: 5px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: color 0.3s ease-in-out, background 0.3s ease-in-out;

    &:focus-visible {
      outline: none;
      background: rgb(9, 66, 0);
      color: #fff;
    }
    &:hover {
      background: #f0a500;
      color: #000;
    }
    &:active {
      background: #d4d5d5;
      color: #000;
    }
  }
  &__title-poster {
    margin-bottom: 20px;
    color: #FFF;
font-family: 'Akrobat';
font-size: 35px;
font-style: normal;
font-weight: 700;
  }
  &__discription-poster {
  margin-bottom: 20px;
    color: #fffefe;
font-family: 'Akrobat';
font-size: 16px;
font-style: normal;
font-weight: 700;
  }
}
</style>
<style>
.swiper-pagination-bullet {
  background: #55545B;
  opacity: 1;
  width: 10px;
  height: 10px;
}
.swiper-pagination-bullet-active {
  background: #fff;
}
.swiper-pagination {
  text-align: right;
}
.swiper-pagination-bullets.swiper-pagination-horizontal {
width: 300px;
right: 0;
left: auto;
}
</style>