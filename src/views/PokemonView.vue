<template>
	<h1>pokemon view</h1>
	<h2 v-if="!pokemon && !errorMessage">buscando...</h2>
	<h2 v-else-if="errorMessage">{{errorMessage}}</h2>
	<template v-else>
		<h2>{{pokemon.name}}</h2>
		<img :src="pokemon.sprites.front_default" :alt="pokemon.name">
	</template>
	<router-link :to="{name:'search'}">volver</router-link>
</template>
<script>
import { watch } from '@vue/runtime-core'
import { useRoute,onBeforeRouteLeave } from 'vue-router'

import usePokemon from '@/composables/usePokemon'

export default {
	setup() {

		const route=useRoute()

		const {	pokemon,
				isLoading,
				errorMessage,
				searchPokemon } = usePokemon()

		/*
		 * Como se está usado Keep-alive no se ejecuta setup()
		 * no se vuelve a dispara
		 */
		watch(
			()=>route.params.id,
			()=>searchPokemon(route.params.id))

		onBeforeRouteLeave((guard)=>{

			const anwser=window.confirm("¿Esta seguro que desea salir?")

			return anwser
			//console.log(anwser)
		})

		return{
			pokemon,
			isLoading,
			errorMessage
		}


	},
}
</script>