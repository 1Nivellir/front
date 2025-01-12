<template>
  <section class="band">
    <div class="container">
    <Vue3Marquee class="band__wrapper" :duration="12">
      <ul class="band__list list-reset">
        <li class="band__item" v-for="(item, index) in items" :key="index">
          <img class="band__img" :src="item.img" alt="band">
        </li>
      </ul>
    </Vue3Marquee>
  </div>
  </section>
</template>

<script lang="ts" setup>
const items = bandList
</script>

<style lang="scss" scoped>
.band {
  padding: 90px 0;
  &__list {
    display: flex;
    gap: 60px;
  }
  &__img {
    border-radius: 20px;
    width: 100%;
    height: 80px;
  }
}
</style>