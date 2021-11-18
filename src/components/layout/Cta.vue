<template>
  <section class="cta">
    <h2>Interested in doing a project together?</h2>
    <div class="cta__line"></div>
    <Button :text="'Contact me'" :link="'contact'" />
  </section>
</template>

<script>
import Button from '@/components/layout/Button.vue'

export default {
  components: {
    Button
  }
}
</script>

<style lang="sass" scoped>
.cta
  text-align: center
  margin-top: 11.6rem
  @include media('medium')
    display: flex
    align-items: center
    justify-content: space-between
    text-align: left
    margin-top: 9.5rem
  @include media('large')
    margin-top: 15rem
  &__line
    @include media('medium')
      background-color: $col-border-gray
      margin: 0 1.5rem
      height: 0.1rem
      width: 100%
    @include media('large')
      margin-top: 1.2rem
  & h2
    margin-bottom: 4rem
    @include media('medium')
      margin: 0
      min-width: 35rem
  & .btn
    @include media('medium')
      min-width: 16.3rem
</style>