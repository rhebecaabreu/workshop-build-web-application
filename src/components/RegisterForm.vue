<template>
   <v-form
    class="register-form"
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      label="Name"
      required
      outlined
    ></v-text-field>

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
      outlined
      @click:append="showPassword = !showPassword"
    ></v-text-field>

    <v-text-field
      v-model="passwordConfirmation"
      :append-icon="showPasswordConfirmation ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.passwordMatch]"
      :type="showPasswordConfirmation ? 'text' : 'password'"
      name="input-10-1"
      label="Confirmar senha"
      hint="Mínimo de 8 caracteres"
      outlined
      @click:append="showPasswordConfirmation = !showPasswordConfirmation"
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="#e451ff"
      class="mr-4 mt-6 mb-10 button"
      height="48"
      @click="validate"
    >
      Criar conta
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'RegisterForm',
  data() {
    return {
      valid: false,
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      showPassword: false,
      showPasswordConfirmation: false,
      show: false,
      rules: {
        required: value => !!value || 'Obrigatório.',
        min: v => v.length >= 8 || 'Mínimo 8 caracteres',
        passwordMatch: () => this.password === this.passwordConfirmation || (`Senha e confirmação de senha devem ser iguais`),
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
        const userRegister = {
          name: this.name,
          email: this.email,
          password: this.password
        }
        this.$emit('register', userRegister)
      }
    },
  },
}
</script>

<style lang="scss">
.register-form {
  .button {
    color: $button-text-secondary-color;
    text-transform: none;
    width: 100%;
  }
}
</style>