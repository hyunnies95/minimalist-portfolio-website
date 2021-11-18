<template>
  <section class="about" id="about">
    <div class="about__img"></div>
    <div class="about__content">
      <h2>About Me</h2>
      <p>
        I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.
      </p>
      <Button :text="'Go to portfolio'" :link="'portfolio'" />
    </div>
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
.about
  margin-top: 9.6rem
  @include media('medium')
    display: flex
    justify-content: space-between
    margin-top: 9.6rem
  @include media('large')
    justify-content: start
    column-gap: 12.5rem
    margin-top: 15.2rem
  &__img
    background-image: url('~@/assets/images/homepage/mobile/image-homepage-profile@2x.jpg')
    background-size: cover
    background-position-x: center
    background-position-y: center
    margin-bottom: 3.3rem
    height: 34.6rem
    width: 100%
    @include media('medium')
      background-image: url('~@/assets/images/homepage/tablet/image-homepage-profile@2x.jpg')
      flex-basis: 41%
      margin: 0
      height: 60rem
    @include media('large')
      background-image: url('~@/assets/images/homepage/desktop/image-homepage-profile@2x.jpg')
      flex-basis: 48.65%

  &__content
    border-top: 1px solid $col-border-gray
    border-bottom: 1px solid $col-border-gray
    padding: 3.2rem 0 5rem
    @include media('medium')
      display: flex
      flex-direction: column
      justify-content: space-evenly
      align-items: flex-start
      padding: 5rem 0 4.5rem
      flex-basis: 49.2%
      min-height: 60rem
    @include media('large')
      flex-basis: initial
      justify-content: start
      max-width: 35.1rem
      
  & .btn
    margin-top: 2.4rem
</style>