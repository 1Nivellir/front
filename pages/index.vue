<template>
  <div>
    <HomeBand />
    <HomeTop />
    <!-- <HomeFilms /> -->
    <HomeRecommend :slides='loadFiles.recommendList.value' />
  </div>
</template>

<script lang="ts" setup>
import { useLoadHome } from '~/composables/useLoadHome';

const loadFiles = await useLoadHome()
</script>

<style>

</style>