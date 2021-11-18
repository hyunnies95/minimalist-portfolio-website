<template>
  <section class="description">
    <h2>{{ name }}</h2>
    <p class="description__text">{{ summary }}</p>
    <div class="description__features">
      <p>{{ type }}</p>
      <p>{{ skills }}</p>
    </div>
    <Button :text="'Visit Website'" />
  </section>
</template>

<script>
import Button from '@/components/layout/Button.vue'

export default {
  components: {
    Button
  },
  props: ['name', 'summary', 'type', 'skills']
}
</script>

<style lang="sass" scoped>
.description
  border-top: 1px solid $col-border-gray
  border-bottom: 1px solid $col-border-gray
  padding: 2.4rem 0
  @include media('medium')
    display: grid
    grid-template-columns: 1fr 49.1%
    padding: 3.2rem 0
  @include media('large')
    padding: 4.8rem 0
    max-width: 35rem
    display: block
  & h2
    margin-bottom: 2.4rem
    @include media('medium')
      margin-bottom: 1.6rem
    @include media('large')
      margin-bottom: 2.9rem
  &__text
    font-size: 1.5rem
    margin-bottom: 2.4rem
    @include media('medium')
      grid-column: 2 / 3
      grid-row: 1 / 4
      margin: 0
    @include media('large')
      margin-bottom: 1.5rem
  &__features
    margin-bottom: 2.4rem
    @include media('medium')
      margin-bottom: 1.6rem
    @include media('large')
      margin-bottom: 2.4rem
    & p
      color: $col-cyan
      font-size: 1.3rem
      font-weight: bold
      line-height: 3rem
      opacity: 1
      @include media('large')
        font-size: 1.6rem
        line-height: 4.6rem
  & .btn
    width: 18.1rem
</style>