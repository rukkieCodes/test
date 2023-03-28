<template>
    <v-card>
        <v-img :src="data.image" :alt="data.alt" @dblclick="data = {}" v-if="Object.keys(data).length != 0" cover />

        <v-card-actions>
            <v-avatar v-for="(image, index) in images" :key="index" @mouseenter="data = {
                image: image.src,
                alt: image.alt
            }" class="mr-4 rounded-lg" size="large">
                <v-img :src="image" :alt="image.alt" cover />
            </v-avatar>
        </v-card-actions>
    </v-card>
</template>
  
<script setup>
import { ref } from 'vue'

const images = [
    {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        alt: 'Squirrel',
    },
    {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        alt: 'Sky',
    },
    {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        alt: 'Bird',
    },
    {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        alt: 'Planet',
    },
]

const data = ref({})
</script>
