<template>
  <div class="container">
   <CommonHero :film="film" />
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useMyStoreStore } from '~/stores/store';

const store = useMyStoreStore();
const route = useRoute();
const idFilms = ref<number>(0);

  definePageMeta({
	layout: 'main',
})

if (typeof route.params.id === 'string') {
  idFilms.value = parseInt(route.params.id);
} else if (Array.isArray(route.params.id)) {
  idFilms.value = parseInt(route.params.id[0]);
}

await useAsyncData('store', () => store.fetchMovieById(idFilms.value));
const film = computed(() => store.oneFilm);
console.log(film);

</script>
