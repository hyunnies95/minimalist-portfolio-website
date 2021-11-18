<template>
  <section class="hero">
    <div class="hero__img"></div>
    <div class="hero__content">
      <h1>Hey, I’m Alex Spencer and I love building beautiful websites</h1>
      <a class="hero__btn" href="#about">
        <div class="hero__btn-icon"></div>
        About me
      </a>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.hero
  @include media('medium')
    position: relative
  &__img
    background-image: url('~@/assets/images/homepage/mobile/image-homepage-hero@2x.jpg')
    background-size: cover
    background-position-x: center
    margin-bottom: 2.4rem
    height: 27.1rem
    width: 100%
    @include media('medium')
      background-image: url('~@/assets/images/homepage/tablet/image-homepage-hero@2x.jpg')
      height: 59.9rem
    @include media('large')
      background-image: url('~@/assets/images/homepage/desktop/image-homepage-hero@2x.jpg')
  &__content
    @include media('medium')
      background-color: $col-very-light-gray
      position: absolute
      bottom: 0
      padding: 5.6rem 0 0
      min-height: 27.7rem
      width: 74.7%
    @include media('large')
      height: 35.5rem
      width: 44.5rem
    & h1
      max-width: 45rem
      @include media('large')
        max-width: 39rem


  &__btn
    background-color: $col-dark-blue
    color: $col-white
    font-size: 1.2rem
    font-weight: 600
    display: flex
    align-items: center
    text-align: center
    text-transform: uppercase
    letter-spacing: 2px
    transition: $transition background-color
    height: 4.8rem
    width: 20rem
    &:hover
      background-color: $col-cyan
      & > .hero__btn-icon
        background-color: #55A191
    &-icon
      background-image: url(~@/assets/images/icons/down-arrows.svg)
      background-color: #1C3444
      background-repeat: no-repeat
      background-position: center
      margin-right: 3.8rem
      transition: $transition background-color
      height: 100%
      width: 4.8rem
</style>