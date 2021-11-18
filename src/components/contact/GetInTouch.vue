<template>
  <section class="get-in-touch">
    <h2>Get in Touch</h2>
    <div class="get-in-touch__content">
      <p>
        I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I’m also happy to hear about opportunites that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.
      </p>
      <Social class="dark" />
    </div>
  </section>
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
.get-in-touch
  border-top: 1px solid $col-border-gray
  border-bottom: 1px solid $col-border-gray
  padding: 2.4rem 0 3.2rem
  @include media('medium')
    padding: 3.2rem 0
    margin-top: 4.7rem
  @include media('large')
    display: flex
    justify-content: space-between
    padding: 4.8rem 0
    margin-top: 4rem
  & h2
    margin-bottom: 2.4rem
  &__content
    @include media('large')
      max-width: 63.5rem
    & p
      margin-bottom: 2.4rem
</style>