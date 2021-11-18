<template>
  <nav class="nav">
    <router-link class="nav__link nav__link--previous" :to="{ name: 'Project', params: { slug: previousProject }}">
      <img src="@/assets/images/icons/arrow-left.svg" alt="<">
      <div class="nav__text">
        <h3>{{ previousProject }}</h3>
        <p>Previous Project</p>
      </div>
    </router-link>
    <div class="nav__divider"></div>
    <router-link class="nav__link nav__link--next" :to="{ name: 'Project', params: { slug: nextProject }}">
      <img src="@/assets/images/icons/arrow-right.svg" alt=">">
      <div class="nav__text">
        <h3>{{ nextProject }}</h3>
        <p>Next Project</p>
      </div>
    </router-link>
  </nav>
</template>

<script>
export default {
  props: ['previousProject', 'nextProject']
}
</script>

<style lang="sass" scoped>
.nav
  border-top: 1px solid $col-border-gray
  border-bottom: 1px solid $col-border-gray
  display: flex
  justify-content: space-between
  align-items: center
  position: relative
  margin-top: 3.2rem
  @include media('medium')
    margin-top: 4.8rem
  @include media('large')
    margin-top: 3.2rem
  & h3
    text-transform: capitalize
    transition: $transition color
    margin: 0
  & p
    opacity: 0.5
    transition: $transition color
    margin-top: -0.3rem
  &__text
    margin-top: 1.3rem
  &__divider
    background-color: $col-border-gray
    content: ''
    position: absolute
    left: 50%
    transform: translateX(-50%)
    height: 100%
    width: 0.1rem
  &__link
    padding: 2.4rem 0
    width: 100%
    @include media('medium')
      display: flex
      align-items: center
      padding: 1.6rem 0 3.2rem
    &--previous
      @include media('medium')
        & img
          margin: 1.2rem 3.2rem 0 0
    &--next
      text-align: right
      @include media('medium')
        flex-direction: row-reverse
        & img
          margin: 1.2rem 0 0 3.2rem
    &:hover > .nav__text *
      color: $col-cyan
      
  
</style>