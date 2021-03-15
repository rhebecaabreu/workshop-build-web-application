<template>
  <v-row
    no-gutters
    class="home"
  >
    <v-col
    >
      <v-card
        class="pa-2"
        elevation="0"
        tile
      >
        <v-card-title class="card-title">
          Gerencie suas tarefas diárias de um jeito mais legal
        </v-card-title>
        <v-card-subtitle class="card-subtitle">
          Com organização e tempo, acha-se o segredo de fazer tudo e bem feito
        </v-card-subtitle>
        <v-card-text>
          <v-btn
            class="ma-2"
            color="secondary"
          >
            Criar conta
          </v-btn>
          <v-btn
            class="ma-2"
            outlined
            color="indigo"
          >
            Já possuo uma conta
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
        <v-col
    >
      <v-card
        class="pa-2"
        elevation="0"
        tile
      >
        <v-img
          src="@/assets/images/checklist.svg"
        ></v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss">
.home {
  .column-cards {
    height: 100%;

    .card-title {
      font-family: 'Ubuntu-Bold';
      font-size: 28px;
      margin-bottom: 10px;;
    }

    .card-subtitle {
      font-family: 'Ubuntu-Regular';
      font-size: 16px;
      margin-bottom: 80px;
    }
  }
}
</style>