<template>
  <v-container>
    <v-toolbar class="mb-10 rounded-lg">
      <v-spacer />

      <v-btn to="/">Card1</v-btn>
      <v-btn to="/card2">Card2</v-btn>

      <v-spacer />
    </v-toolbar>
    
    <router-view />
  </v-container>
</template>