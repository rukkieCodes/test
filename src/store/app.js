import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    email: '',
    images: [
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
  }),


  actions: {
    alretButton() {
      alert('red')
    }
  }
})
