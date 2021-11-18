<template>
  <div class="home">
    <Hero />
    <About />
    <Cta />
  </div>
</template>

<script>
import Hero from '@/components/home/Hero.vue'
import About from '@/components/home/About.vue'
import Cta from '@/components/layout/Cta.vue'

export default {
  components: {
    Hero,
    About,
    Cta
  }
}
</script>

