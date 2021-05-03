<template>
  <v-row
    no-gutters 
    justify="center"
    fill-height
    class="login"
  >
    <v-col
      lg="4"
      md="12"
      class="pr-6"
    >
      <v-card
        elevation="0"
      >
        <v-card-title class="pa-0 card-title mb-14">Entrar</v-card-title>
        <login-form
          @login="signInWithFirebase"
        />
        <line-or />
        <v-row justify="center mt-10 mb-10">
          <outlined-button
            text="Não possuo conta"
          />
          <filled-button
            text="Entrar com Facebook"
            icon="mdi-facebook"
            @click="loginWithFacebook"
          />
        </v-row>
      </v-card>
    </v-col>
    <v-col
      lg="4"
      md="12"
      class="pl-10"
    >
      <v-img
        src="@/assets/images/login.svg"
      />
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex';
import LineOr from '../components/LineOr.vue'
import OutlinedButton from '../components/OutlinedButton.vue'
import FilledButton from '../components/FilledButton.vue'
import LoginForm from '../components/LoginForm.vue'
import firebase from 'firebase';

export default {
  name: 'Login',
  components: {
    LineOr,
    FilledButton,
    OutlinedButton,
    LoginForm
  },
  methods: {
    ...mapActions(['addUser']),
    signInWithFirebase(user) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(data => {
          console.log(data)
          this.redirectUser(data);
        })
        .catch(err => {
          this.error = err.message;
        });
    },
    redirectUser(data) {
      this.addUser({
        name: data.user.displayName,
        email: data.user.email
      })
      this.$router.push({ name: 'dashboard' });
    },
    loginWithFacebook() {
      var provider = new firebase.auth.FacebookAuthProvider();
      
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          console(result);
          if (result.credential.accessToken) {
            this.redirectUser(data);
          }
        }).catch((error) => {
          console.log(error)
        });
    }
  },
}
</script>

<style lang="scss">
  .login {
    .card-title {
      text-align: center;
      display: block;
      color: $button-color;
      font-family: 'Ubuntu-bold';
    }
  }
</style>