import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import FrameView from './views/FrameView.vue'

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/frame',
        name: 'frame',
        component: FrameView
      }
    ]
  })