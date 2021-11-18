<template>
  <section class="preview">
    <h3>Static Previews</h3>
    <picture>
      <source :srcset="require('@/assets/images/detail/desktop/image-' + img + '-preview-1@2x.jpg')" media="(min-width: 992px)">
      <source :srcset="require('@/assets/images/detail/tablet/image-' + img + '-preview-1@2x.jpg')" media="(min-width: 670px)">
      <img class="preview__img" :src="require('@/assets/images/detail/mobile/image-' + img + '-preview-1@2x.jpg')" draggable="false">
    </picture>
    <picture>
      <source :srcset="require('@/assets/images/detail/desktop/image-' + img + '-preview-2@2x.jpg')" media="(min-width: 992px)">
      <source :srcset="require('@/assets/images/detail/tablet/image-' + img + '-preview-2@2x.jpg')" media="(min-width: 670px)">
      <img class="preview__img" :src="require('@/assets/images/detail/mobile/image-' + img + '-preview-2@2x.jpg')" draggable="false">
    </picture>
  </section>
</template>

<script>
export default {
  props: ['img']
}
</script>

<style lang="sass" scoped>
.preview
  margin-top: 4rem
  & h3
    margin-bottom: 4rem
    @include media('large')
      margin-bottom: 2.8rem
  &__img
    object-fit: cover
    object-position: top
    height: 19.7rem
    width: 100%
    @include media('medium')
      height: 43.4rem
    @include media('large')
      height: 40rem
    &:first-of-type
      margin-bottom: 2.8rem
</style>