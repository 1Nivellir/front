<template>
  <div class="buttons">
    <div class="buttons__wrapper">
              <button
                class="buttons__btn buttons__color btn-reset"
                @mouseover="hovered1 = true"
                @mouseleave="hovered1 = false"
              >
                <img
                  class="buttons__img"
                  :src="hovered1 ? '/img/play-list-hover.png' : '/img/play-list.png'"
                  alt="watch-play"
                />
                <span class="buttons__text">Смотреть трейлер</span>
              </button>
              <button
                class="buttons__btn btn-reset"
                @mouseover="hovered2 = true"
                @mouseleave="hovered2 = false"
              >
                <img
                  class="buttons__img"
                  :src="hovered2 ? '/img/watch-list-hover.png' : '/img/watch-list.png'"
                  alt="watch-list"
                />
                <span class="buttons__text">Добавить в избранное</span>
              </button>
            </div>
  </div>
</template>

<script lang="ts" setup>
const hovered1 = ref(false)
const hovered2 = ref(false)
</script>

<style lang="scss" scoped>
.buttons {
  &__wrapper {
    display: flex;
    gap: 20px;
  }
  &__btn {
    position: relative;
    border-radius: 10px;
    border: 1px solid #FFF;
    padding: 10px 7px 10px 30px;
    &:hover {
      background-color: #fff;
      color: #000;
    }
    &:hover .buttons__text {
      color: #000;
    }
  }
  &__img {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    width: 20px;
    height: auto;
  }
  &__color {
    background-color: #00925D;
    border: none;
    &:hover {
      background-color: #fff;
    }
  }
  &__text {
    display: block;
   color: #FFF;
font-family: 'Akrobat';
font-size: 13px;
font-style: normal;
font-weight: 400;
  }
}
  
</style>