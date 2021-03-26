<template>
  <v-form
    ref="form"
    class="login-form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
        v-model="email"
        :rules="rules.emailRules"
        label="E-mail"
        required
        outlined
    ></v-text-field>

    <v-text-field
      v-model="password"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.min]"
      :type="showPassword ? 'text' : 'password'"
      name="input-10-1"
      label="Senha"
      hint="Mínimo de 8 caracteres"
      counter
      outlined
      @click:append="showPassword = !showPassword"
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="#e451ff"
      class="mr-4 button mt-8 mb-10"
      height="48"
      @click="validate"
    >
      Entrar
    </v-btn>
  </v-form>
</template>
<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      valid: true,
      email: '',
      password: '',
      showPassword: false,
      show: false,
      rules: {
        required: value => !!value || 'Obrigatório.',
        min: v => v.length >= 8 || 'Mínimo 8 caracteres',
        emailRules: [
          v => !!v || 'Obrigatório',
          v => /.+@.+\..+/.test(v) || 'E-mail deve ser um endereço válido',
        ],
      },
    }
  },
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        const userLogin = {
          email: this.email,
          password: this.password
        }
        this.$emit('login', userLogin)
      }
    },
  },
}
</script>
<style lang="scss">
.login-form {
  .button {
    color: $button-text-secondary-color;
    text-transform: none;
    width: 100%;
  }
}
</style>