<template>
  <section class="contact-me">
    <h2>Contact Me</h2>

    <form class="form" @submit.prevent="onSubmit">
      <div class="form__group">
        <label class="form__label">Name</label>
        <input class="form__control" :class="{'form__control--error': v.form.name.$error}" placeholder="Jane Appleseed" type="text" v-model="v.form.name.$model">
        <div class="form__errors" v-for="(error, index) of v.form.name.$errors" :key="index">
          <div class="form__error-msg">{{ error.$message }}</div>
        </div>
      </div>

      <div class="form__group">
        <label class="form__label">Email Address</label>
        <input class="form__control" :class="{'form__control--error': v.form.email.$error}" placeholder="email@example.com" type="email" v-model="v.form.email.$model">
        <div class="form__errors" v-for="(error, index) of v.form.email.$errors" :key="index">
          <div class="form__error-msg">{{ error.$message }}</div>
        </div>
      </div>

      <div class="form__group">
        <label class="form__label">Message</label>
        <textarea class="form__control form__control--textarea" :class="{'form__control--error': v.form.message.$error}" placeholder="How can I help?" v-model="v.form.message.$model"></textarea>
        <div class="form__errors" v-for="(error, index) of v.form.message.$errors" :key="index">
          <div class="form__error-msg">{{ error.$message }}</div>
        </div>
      </div>
       <button class="btn" :disabled="v.form.$invalid">Send Message</button>
    </form>
  </section>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'

export default {
  setup() {
    return { v: useVuelidate() }
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  validations() {
    return {
      form: {
        name: { required: helpers.withMessage('This field is required', required) },
        email: { 
          required: helpers.withMessage('This field is required', required),
          email: helpers.withMessage('Please use a valid email address', email)
        },
        message: { required: helpers.withMessage('This field is required', required) }
      },
    }
  }
}

</script>

<style lang="sass" scoped>
.contact-me
  padding: 3.2rem 0
  @include media('large')
    display: flex
    justify-content: space-between
    padding: 4.7rem 0
  & h2
    margin-bottom: 3.1rem
    @include media('medium')
      margin-bottom: 3.9rem
    @include media('large')
      margin: 0
.form
  width: 100%
  @include media('large')
    margin-top: 0.7rem
    max-width: 63.5rem
  &__group
    position: relative
    margin-bottom: 3.1rem
    &:last-of-type
      margin-bottom: 2.4rem
  &__label
    font-size: 1.3rem
    font-weight: bold
    opacity: 0.8
    margin-bottom: 1.6rem
  &__control
    background-color: $col-form-input-bg
    font-size: 1.3rem
    padding: 1.6rem
    height: 4.8rem
    width: 100%
    &--textarea
      min-height: 9.6rem
    &::placeholder
      color: $col-form-input-placeholder
    &--error
      border: 1px solid $col-red
  &__error-msg
    color: $col-red
    cursor: default
    font-size: 1rem
    font-style: italic
    font-weight: bold
    position: absolute
    bottom: -1.5rem

.btn
  background-color: $col-dark-blue
  border: 1px solid $col-dark-blue
  color: $col-white
  font-size: 1.2rem
  font-weight: 600
  letter-spacing: 2px
  padding: 1.6rem 3.8rem
  text-transform: uppercase
  transition: $transition
  &:hover
    background-color: $col-white
    color: $col-dark-blue
  &:disabled
    opacity: 0.5
    pointer-events: none

  
</style>