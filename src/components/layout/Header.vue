<template>
  <header class="header">
    <div class="container">
      <nav class="header__nav">
        <router-link to="/"><img class="header__logo" src="@/assets/images/logo.svg" alt="logo"></router-link>
        <div class="header__hamburger" @click="showMobileMenu"></div>
        <!-- <img class="header__hamburger" src="@/assets/images/icons/hamburger.svg" alt="hamburger" @click="showMobileMenu"> -->
        <ul class="header__links">
          <li><router-link to="/" active-class="active">Home</router-link></li>
          <li><router-link to="/portfolio" active-class="active">Portfolio</router-link></li>
          <li><router-link to="/contact" active-class="active">Contact Me</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    showMobileMenu() {
      document.querySelector('.header__links').classList.toggle('open')
      document.querySelector('.header__hamburger').classList.toggle('open')
    }
  }
}
</script>

<style lang="sass" scoped>
.header
  padding: 3.2rem 0 3.6rem
  @include media('medium')
    padding: 6.4rem 0 4.3rem
  @include media('large')
    padding-bottom: 5rem
  &__nav
    display: flex
    align-items: center
    justify-content: space-between
  &__hamburger
    background-image: url(~@/assets/images/icons/hamburger.svg)
    background-repeat: no-repeat
    cursor: pointer
    position: relative
    top: 0.7rem
    height: 3rem
    width: 3rem
    @include media('medium')
      display: none
    &.open
      background-image: url(~@/assets/images/icons/close.svg)
      top: 0.3rem
      right: -0.3rem
  &__links
    display: none
    @include media('max-medium')
      background-color: $col-grayish-dark-blue
      flex-direction: column
      align-items: center
      justify-content: space-between
      gap: 2rem
      position: absolute
      right: 3.2rem
      top: 9rem
      padding: 4rem 0
      height: 18.6rem
      max-width: 30rem
      width: 71%
    @include media('medium')
      display: flex
      column-gap: 4.1rem
      margin-bottom: 0.7rem
    &.open
      display: flex
      z-index: 9
    & li a
      color: $col-white
      font-size: 1.2rem
      font-weight: 600
      letter-spacing: 2px
      text-transform: uppercase
      transition: $transition color
      @include media('medium')
        color: $col-grayish-dark-blue
      &:hover
        color: $col-cyan
      &.active
        @include media('medium')
          color: $col-cyan
</style>