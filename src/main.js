import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



createApp(App)
	.use(store) //El store es lo primero que se debe cargar
	.use(router)
	.mount('#app')
