// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),

        children: [
          {
            path: '',
            name: 'Home.Card1',
            component: () => import('@/views/subViews/Card1.vue'),
          },
          {
            path: 'card2',
            name: 'Home.Card2',
            component: () => import('@/views/subViews/Card2.vue'),
          },
        ]
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/About.vue'),
      },
    ],
  },
  {
    // path: '/:pathMatch(.*)*',
    // name: 'NotFound',
    // component: () => import('@/views/NotFound.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
