<template>
  <v-btn
    class="ma-2"
    color="#3e3e55"
    @click="goTo"
  >
    <v-icon> {{ icon }}</v-icon>
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  name: 'FilledButton',
  props: {
    text: String,
    icon: String,
  },
  methods: {
    goTo() {
      this.$emit('click')
    }
  }
}
</script>