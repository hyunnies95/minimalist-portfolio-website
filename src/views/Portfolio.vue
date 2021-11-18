<template>
  <section class="portfolio">
      <Card v-for="project in projects" :key="project.id" :name="project.name" :summary="project.summary" :slug="project.slug"/>
      <Cta />
  </section>
</template>

<script>
import Card from '@/components/portfolio/Card.vue'
import Cta from '@/components/layout/Cta.vue'
import json from '@/data/data.json'

export default {
  components: {
    Card,
    Cta
  },
  data() {
    return {
      projects: json
    }
  }
}
</script>

<style lang="sass" scoped>
.portfolio 
  margin-top: 4.7rem
  @include media('large')
    margin-top: 3.5rem
  & .card
    margin: 0 auto
    max-width: 55rem
    @include media('medium')
      max-width: 78rem
    @include media('large')
      max-width: none
    &:not(:last-of-type)
      margin-bottom: 7.2rem
      @include media('medium')
        margin-bottom: 8rem
      @include media('large')
        margin-bottom: 7.5rem
</style>