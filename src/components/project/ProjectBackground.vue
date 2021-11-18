<template>
  <section class="background">
    <h3>Project Background</h3>
    <p>{{ description }}</p>
    
  </section>
</template>

<script>
export default {
  props: ['description']
}
</script>

<style lang="sass" scoped>
.background
  margin-top: 4.8rem
  @include media('medium')
    margin-top: 4rem
  @include media('large')
    margin: 0
  & p
    font-size: 1.5rem
</style>