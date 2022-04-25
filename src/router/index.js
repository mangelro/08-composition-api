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
    component: () => import(/* webpackChunkName: "searc" */ '../views/SearchPokemonView.vue'),
  },
  {
    path: '/pokemon/:id',
    name: 'pokemon-id',
    component: () => import(/* webpackChunkName: "pokemonid" */ '../views/PokemonView.vue'),
    // props: route=>{
    //   return{
    //     initValue:Number.parseInt(route.query.i??10)
    //   }
    // }
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import(/* webpackChunkName: "todo" */ '../views/TodoVuexView.vue'),
  },
  {
    path: '/slots',
    name: 'slots',
    component: () => import(/* webpackChunkName: "slots" */ '../views/CustomSlots.vue'),
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
