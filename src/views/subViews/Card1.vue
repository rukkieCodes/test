<template>
    <v-card width="400" max-width="90%">
        <v-card-title>Title</v-card-title>
        <v-card-text>
            <v-text-field v-model="email" label="Email" prepend-inner-icon="mdi-at" variant="underlined" />
            <span>email: {{ email }}</span>
        </v-card-text>

        <v-card-text>
            <v-btn v-for="(color, i) in arrayOfColors" :key="i" :class="color == 'red' ? 'bg-red' : ''"
                :style="i == arrayOfColors.length ? 'margin-right: 0' : 'margin-right: 10px'">
                {{ color }}
            </v-btn>
        </v-card-text>
    </v-card>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

const arrayOfColors = ['red', 'green', 'blue']
</script>
