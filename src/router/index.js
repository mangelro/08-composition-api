import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import(/* webpackChunkName: "users" */ '../views/UsersView.vue'),
  },
  {
    path: '/counter',
    name: 'counter',
    component: () => import(/* webpackChunkName: "counter" */ '../views/CounterView.vue'),
    props: route=>{
      return{
        initValue:Number.parseInt(route.query.i??10)
      }
    }
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "counter" */ '../views/SearchPokemonView.vue'),
  },
  {
    path: '/pokemon/:id',
    name: 'pokemon-id',
    component: () => import(/* webpackChunkName: "counter" */ '../views/PokemonView.vue'),
    // props: route=>{
    //   return{
    //     initValue:Number.parseInt(route.query.i??10)
    //   }
    // }
  },
  { path: '/:pathMatch(.*)', 
    name: 'notfound', 
    component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFoundView.vue'),
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
