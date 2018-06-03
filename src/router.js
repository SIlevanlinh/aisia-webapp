import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AnomalyView from './views/AnomalyView.vue'
import Test from './views/Test.vue'

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/anomaly',
        name: 'anomaly-view',
        component: AnomalyView
      },
      {
        path: '/test',
        name: 'test-view',
        component: Test
      }
    ]
  })