<template>
  <section class="hero">
    <picture>
      <source :srcset="require('@/assets/images/detail/desktop/image-' + img + '-hero@2x.jpg')" media="(min-width: 992px)">
      <source :srcset="require('@/assets/images/detail/tablet/image-' + img + '-hero@2x.jpg')" media="(min-width: 670px)">
      <img class="hero__img" :src="require('@/assets/images/detail/mobile/image-' + img + '-hero@2x.jpg')" draggable="false">
    </picture>
  </section>
</template>

<script>
export default {
  props: ['img']
}
</script>

<style lang="sass" scoped>
.hero
  @include media('medium')
    margin-top: 4.7rem
  @include media('large')
    margin-top: 4rem
  &__img
    object-fit: cover
    margin-bottom: 3.6rem
    height: 14rem
    width: 100%
    @include media('medium')
      height: 31rem
    @include media('large')
      margin-bottom: 11.1rem
      height: 50rem
</style>