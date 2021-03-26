<template>
  <div> Olá, {{ userName }} </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Dashboard',
  data() {
    return {
      userName: '',
    };
  },
  computed: {
    ...mapGetters(['currentUser']),
    user() {
      return this.currentUser;
    }
  },
  
  mounted() {
    this.userName = this.currentUser.name;
  }
}
</script>