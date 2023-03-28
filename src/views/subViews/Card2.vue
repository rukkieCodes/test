<template>
    <v-card width="400">
        <v-img :src="data.image" :alt="data.alt" @dblclick="data = {}" v-if="Object.keys(data).length != 0" cover />

        {{ email }}
        <v-card-actions>
            <v-btn v-for="(image, index) in images" :key="index" size="x-large" :to="`/${index}`">
                <v-avatar @mouseenter="data = {
                    image: image.src,
                    alt: image.alt
                }" class="mr-4 rounded-lg" size="large">
                    <v-img :src="image" :alt="image.alt" cover />
                </v-avatar>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
  
<script setup>
import { useAppStore } from '@/store/app'
import { ref } from 'vue'

const { images, email } = useAppStore()

const data = ref({})
</script>
