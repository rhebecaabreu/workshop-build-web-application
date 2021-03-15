<template>
  <div class="tasks-toolbar">
    <v-app-bar
      color="transparent"
      height="80"
      elevation="0"
      dark
    >
      <v-toolbar-title class="tasks-title">Tasks</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn>
        Button
      </v-btn>

      <v-btn>
        Button
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'Toolbar'
}
</script>

<style lang="scss">
.tasks-toolbar {
  .tasks-title {
    color: #e451ff;
    font-family: 'Ubuntu-Bold';
  }
}
</style>