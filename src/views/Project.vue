<template>
  <section class="project">
    <Hero :img="project.slug"/>
    <div class="project__content">
      <Description :name="project.name" :summary="project.summary" :type="project.type" :skills="project.skills" />
      <div class="project__body">
        <ProjectBackground :description="project.description" />
        <StaticPreviews :img="project.slug"/>
      </div>
    </div>
    <Nav :previousProject="project.previousProject.toLowerCase()" :nextProject="project.nextProject.toLowerCase()" />
    <Cta />
  </section>
</template>

<script>
import Hero from '@/components/project/Hero.vue'
import Description from '@/components/project/Description.vue'
import ProjectBackground from '@/components/project/ProjectBackground.vue'
import StaticPreviews from '@/components/project/StaticPreviews.vue'
import Nav from '@/components/project/Nav.vue'
import Cta from '@/components/layout/Cta.vue'
import json from '@/data/data.json'

export default {
  components: {
    Hero,
    Description,
    ProjectBackground,
    StaticPreviews,
    Nav,
    Cta
  },
  computed: {
    project() {
      return json.find(item => item.slug == this.$route.params.slug)
    }
  },
  created() {
    document.title = 'Frontend Mentor | ' + this.project.name + ' Project'
  }
}
</script>

<style lang="sass" scoped>
.project
  &__content
    @include media('large')
      display: flex
      justify-content: space-between
      align-items: flex-start
      column-gap: 4rem
  &__body
    @include media('large')
      max-width: 63.5rem
</style>