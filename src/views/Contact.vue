<template>
  <section class="contact">
    <GetInTouch />
    <ContactMe />
  </section>
</template>

<script>
import GetInTouch from '@/components/contact/GetInTouch.vue'
import ContactMe from '@/components/contact/ContactMe.vue'

export default {
  components: {
    GetInTouch,
    ContactMe
  }
}
</script>
