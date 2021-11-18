<template>
  <router-link class="btn" :to="'/' + link">{{ text }}</router-link>
</template>

<script>
export default {
  props: ['text', 'link']
}
</script>

<style lang="sass" scoped>
.btn
  border: 1px solid $col-grayish-dark-blue
  display: inline-flex
  justify-content: center
  font-size: 1.2rem
  letter-spacing: 2px
  text-transform: uppercase
  padding: 1.6rem 3.2rem
  transition: $transition
  &:hover
    color: $col-white
    background-color: $col-grayish-dark-blue
</style>