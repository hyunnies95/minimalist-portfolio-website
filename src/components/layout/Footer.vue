<template>
  <footer class="footer">
    <div class="container">
      <nav class="footer__nav">
        <router-link to="/"><img class="footer__logo" src="@/assets/images/logo-light.svg" alt="logo"></router-link>
        <ul class="footer__links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/portfolio">Portfolio</router-link></li>
          <li><router-link to="/contact">Contact Me</router-link></li>
        </ul>
        <Social />
      </nav>
    </div>
  </footer>
</template>

<script>
import Social from '@/components/layout/Social.vue'

export default {
  components: {
    Social
  }
}
</script>

<style lang="sass" scoped>
.footer
  background-color: $col-grayish-dark-blue
  color: $col-white
  padding: 5.6rem 0
  margin-top: 8.1rem
  height: 35.9rem
  @include media('medium')
    margin-top: 9.6rem
    padding: 0
    height: 8rem
  @include media('large')
    margin-top: 15rem
  & .container
    height: 100%
  
  &__logo
    margin-bottom: 3.2rem
    @include media('medium')
      margin: 0.4rem 4.9rem 0 0
  &__nav
    display: flex
    flex-direction: column
    align-items: center
    text-align: center
    @include media('medium')
      flex-direction: row
      align-items: center
      text-align: left
      height: 100%

  &__links
    display: flex
    flex-direction: column
    gap: 2.7rem
    @include media('medium')
      flex-direction: row
      align-items: center
      column-gap: 4rem
      margin-bottom: 0.2rem
    & li 
      &:last-of-type
        margin-bottom: 3.9rem
        @include media('medium')
          margin: 0
      & a
        color: $col-white
        font-size: 1.2rem
        font-weight: 600
        letter-spacing: 2px
        text-transform: uppercase
        transition: $transition
        &:hover
          color: $col-cyan

  & .social
    column-gap: 1.6rem
    @include media('medium')
      margin-top: 0.4rem
      margin-left: auto
</style>