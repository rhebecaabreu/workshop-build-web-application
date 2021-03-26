<template>
  <v-row
    no-gutters 
    justify="center"
    fill-height
    class="register"
  >
    <v-col
      lg="4"
      md="12"
      class="pr-4"
    >
      <v-card
        elevation="0"
        class="pa-4"
      >
        <v-card-title class="pa-0 mb-6 card-title">Criar sua conta</v-card-title>

        <register-form 
          @register="createFirebaseUser"
        />
        <line-or />
        <v-row justify="center mt-10 mb-10">
          <outlined-button 
            text="Já possuo conta"
          />
          <filled-button
            text="Entrar com Facebook"
            icon="mdi-facebook"
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
        class="mt-6"
        src="@/assets/images/register.svg"
      />
    </v-col>
  </v-row>
</template>

<script>
import LineOr from '../components/LineOr.vue'
import RegisterForm from '../components/RegisterForm.vue'
import OutlinedButton from '../components/OutlinedButton.vue'
import FilledButton from '../components/FilledButton.vue'
import firebase from "firebase";

export default {
  name: 'Register',
  components: {
    LineOr,
    RegisterForm,
    FilledButton,
    OutlinedButton
  },
  methods: {
    createFirebaseUser(userParams) {
      console.log(userParams)
      firebase
        .auth()
        .createUserWithEmailAndPassword(userParams.email, userParams.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: userParams.name
            })
            .then(() => {
              this.$router.push({ name: 'login'})
            });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
}
</script>

<style lang="scss">
  .register {
    .card-title {
      text-align: center;
      display: block;
      color: $button-color;
      font-family: 'Ubuntu-bold';
    }
  }
</style>