import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Stream from '../views/stream/Stream.vue'
import StreamSFX from '../views/stream/StreamSFX.vue'
import Art from '../views/art/Art.vue'
import Emotes from '../views/art/Emotes.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/stream',
    name: 'Stream',
    component: Stream
  },
  {
    path: '/stream/sounds',
    name: 'StreamSFX',
    component: StreamSFX
  },
  {
    path: '/art',
    name: 'Art',
    component: Art
  },
  {
    path: '/emotes',
    name: 'Emotes',
    component: Emotes
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
