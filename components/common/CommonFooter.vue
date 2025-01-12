<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__media">
          <ul class="footer__list list-reset">
            <li class="footer__item" v-for="(item, index) in img" :key="index"><NuxtLink :to="item.link"><CommonIcons :iconName="item.icon" width="24" height="24" fill="#fff" class="footer__icon"/></NuxtLink></li>
          </ul>
        </div>
        <nav class="footer__nav">
        <ul class="footer__list list-reset">
          <li class="footer__item" v-for="(item, index) in items" :key="index"><NuxtLink class="footer__link" :to="item.link">{{ item.title }}</NuxtLink></li>
        </ul>
      </nav>
      </div>
    </div>  
    </footer>
</template>

<script lang="ts" setup>
const items = footerList
const img = footerMedia
</script>

<style lang="scss" scoped>
.footer {
  padding: 90px 0;
  border-top: 1px solid #18171A;
  &__list {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  &__item {
    font-family: 'Akrobat';
    font-style: normal;
    font-size: 16px;
    font-weight: 400;
    color: #fff;
  }
  &__link {
    color: #fff;
    opacity: 0.5;
    transition: opacity 0.3s ease;
    &:hover {
      opacity: 1;
    }
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &__icon {
    opacity: 0.5;
    transition: opacity 0.3s ease;
  &:hover {
    opacity: 1;
  }
}
}
</style>