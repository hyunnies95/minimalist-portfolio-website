<template>
  <div class="card">
    <picture>
      <source :srcset="require('@/assets/images/portfolio/desktop/image-portfolio-' + slug + '@2x.jpg')" media="(min-width: 992px)">
      <source :srcset="require('@/assets/images/portfolio/tablet/image-portfolio-' + slug + '@2x.jpg')" media="(min-width: 670px)">
      <img class="card__img" :src="require('@/assets/images/portfolio/mobile/image-portfolio-' + slug + '@2x.jpg')" draggable="false">
    </picture>
    <div class="card__content">
      <h2>{{ name }}</h2>
      <p>{{ summary }}</p>
      <router-link class="btn" :to="{ name: 'Project', params: { slug: slug }}">View Project</router-link>
    </div>
  </div>
</template>


<script>

export default {
  props: ['name', 'summary', 'slug']
}
</script>

<style lang="sass" scoped>
.card
  @include media('medium')
    display: flex
    align-items: center
    justify-content: space-between
    column-gap: 5rem
  @include media('large')
    justify-content: start
    align-items: start
    column-gap: 12.5rem
  &:nth-of-type(even)
    @include media('medium')
      flex-direction: row-reverse
    @include media('large')
      justify-content: normal
  &__img
    object-fit: cover
    object-position: top center
    margin-bottom: 2.8rem
    height: 28.8rem
    width: 100%
    @include media('medium')
      margin: 0.4rem 0 0
      height: 31.4rem
      width: 34.3rem
    @include media('large')
      height: 50rem
      width: 54rem
    
  &__content
    border-top: 1px solid $col-border-gray
    border-bottom: 1px solid $col-border-gray
    padding: 2.4rem 0
    @include media('medium')
      padding: 3.2rem 0 5rem
      max-width: 28.1rem
    @include media('large')
      display: flex
      flex-direction: column
      align-items: flex-start
      padding: 10.4rem 0 5rem
      margin-top: 0.5rem
      min-height: 50rem
      max-width: 35rem
    & h2
      margin-bottom: 2.4rem
      @include media('medium')
        margin-bottom: 2.9rem
      @include media('large')
        margin-bottom: 2.8rem
    & p
      font-size: 1.5rem
      margin-bottom: 2.4rem
      @include media('medium')
        margin-bottom: 3.5rem
      @include media('large')
        font-size: 1.6rem
        margin-bottom: 2.4rem

.btn
  border: 1px solid $col-grayish-dark-blue
  display: inline-flex
  justify-content: center
  font-size: 1.2rem
  letter-spacing: 2px
  text-transform: uppercase
  padding: 1.6rem 3.2rem
  transition: $transition
  width: 17.8rem
  &:hover
    color: $col-white
    background-color: $col-grayish-dark-blue
</style>