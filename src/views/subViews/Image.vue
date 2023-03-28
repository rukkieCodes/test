<template>
  <v-container>
    <v-card>
      <v-img :src="images[$route.params.id]" />
    </v-card>
  </v-container>
</template>

<script setup>
import { useAppStore } from "@/store/app";

const { images } = useAppStore()
</script>