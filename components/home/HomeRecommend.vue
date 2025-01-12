<template>
  <section class="recommend" :style="{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, #0D0C0F 0%, rgba(0, 0, 0, 0.4) 70%, #0D0C0F 100%, rgba(0, 0, 0, 0.4) 50%), url(${recommend[currentIndex].bgr})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }">
    <div class="container">
      <div class="recommend__wrapper-title">
        <h2 class="recommend__title">Cinema рекомендует</h2>
        <div class="recommend__buttons">
          <button
            @click="handleClickPrev"
            class="btn-reset custom-button-prev-rek"
          ></button>
          <button
            @click="handleClickNext"
            class="btn-reset custom-button-next-rek"
          ></button>
        </div>
      </div>
      <div class="recommend__wrapper">
        <div class="recommend__wrapper-left">
          <div class="recommend__wrapper-2">
            <h3 class="recommend__subtitle">{{ recommend[currentIndex].title }}</h3>
            <p class="recommend__discription">{{ recommend[currentIndex].discription }}</p>
          </div>
          <CommonButtons />
        </div>
        <div class="recommend__wrapper-right">
          <CommonSlider
          :loop="true"
            @slideChange="handleSlideChange"
            @instance="setSwiperInstance"
            :slidesperview="4"
            :slide-card="recommend"
            :slidespergroup="1"
            custom-button-next="custom-button-next-rek"
            custom-button-prev="custom-button-prev-rek"
          >
            <template #slide="{ item, index }">
              <div
                class="recommend__img-wrapper"
                :class="{ 'active-slide': currentIndex === index }"
              >
                <img class="recommend__img" :src="item.poster" alt="Poster" />
              </div>
            </template>
          </CommonSlider>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const recommend = recommendCard;
const currentIndex = ref(0);

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
const handleSlideChange = (index: number) => {
  currentIndex.value = index;
};
</script>

<style lang="scss" scoped>
.recommend {
  padding: 50px 0;
  width: 100%;
  min-height: 600px;
  &__wrapper-title {
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
  }
  &__title {
    margin-bottom: 20px;
    font-family: 'Akrobat';
    font-style: normal;
    font-size: 35px;
    font-weight: 400;
    color: #fff;
  }
  &__wrapper {
    display: grid;
    grid-template-columns: 30% 67%;
    gap: 3%;
  }
  &__img {
    border-radius: 20px;
    width: 100%;
    height: 280px;
  }
  &__buttons {
    display: flex;
    gap: 10px
  }
 
  &__subtitle {
    margin-bottom: 20px;
    font-family: 'Akrobat';
    font-style: normal;
    font-size: 35px;
    font-weight: 700;
    color: #fff;
  }
  &__discription {
    font-family: 'Akrobat';
    font-style: normal;
    font-size: 15px;
    font-weight: 500;
    color: #fff;
  }
  &__wrapper-2 {
    margin-bottom: 20px;
  }
}
.active-slide {
    border: 2px solid #00925D;
    border-radius: 20px;
  }
.custom-button-prev-rek {
  background-image: url('/img/Prev.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 40px;
  height: 40px;
}
.custom-button-next-rek {
  background-image: url('/img/Next.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 40px;
  height: 40px;
}
.recommend button:disabled {
  opacity: 0.5;
}
</style>
