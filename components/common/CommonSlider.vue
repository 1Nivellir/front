<template>
  <ClientOnly>
    <Swiper
    :loop="loop"
      :modules="[Navigation]"
      :slides-per-view="slidesperview"
      :slides-per-group="slidespergroup"
      space-between="50"
      :navigation="{
        nextEl: `.${customButtonNext}`,
        prevEl: `.${customButtonPrev}`,
      }"
      class="slider__buttons"
      @slideChange="onSlideChange"
      @swiper="initSwiper"
    >
      <SwiperSlide v-for="(item, index) in slideCard" :key="index">
        <div class="slider__wrapper">
          <slot name="slide" :item="item" :index="index" />
        </div>
      </SwiperSlide>
    </Swiper>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
const onSlideChange = (swiper: any) => {
  RealIndex.value = swiper.realIndex;
  emit('realIndex', swiper.realIndex);
};
const RealIndex = ref(0);
const swiperInstance = ref<any>(null);
const emit = defineEmits(['realIndex', 'instance']);

const initSwiper = (instance: any) => {
  swiperInstance.value = instance;
  emit('instance', instance);
};

defineProps<{
  slidesperview: number;
  slidespergroup?: number;
  slideCard: any[];
  customButtonNext: string;
  customButtonPrev: string;
  loop?: boolean
}>();
</script>
