<template>
  <div class="container">
   <CommonHero :film="film" />
  </div>
</template>

<script lang="ts" setup>

  definePageMeta({
	layout: 'main',
})

import { useRoute } from 'vue-router'
import { useAsyncData } from '#app'

const route = useRoute()
const idFilms = ref<number>(0)

if (typeof route.params.id === 'string') {
  idFilms.value = parseInt(route.params.id)
} else if (Array.isArray(route.params.id)) {
  idFilms.value = parseInt(route.params.id[0])
}

const { data: film, error } = await useAsyncData('filmData', () =>
  useCustomFetch(`movie/${idFilms.value}`), {
    watch: [idFilms]
  })
  console.log(film.value)
  if (error.value) {
    console.error('Ошибка загрузки данных о фильме:', error.value)
  }
</script>
