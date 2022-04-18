<template>
	<h1>Buscar Pokemon: {{pokemonId}}</h1>
	<form @submit.prevent="onSubmit">
		<input 
			v-model.number="pokemonId"
			type="number" 
			placeholder="número de pokemon" 
			ref="inputSearch">
	</form>
	<br/>
	
</template>
<script>
import { ref, onActivated } from 'vue';
import { useRouter } from 'vue-router'
export default {

	setup() {
		const pokemonId=ref(null)
		const inputSearch=ref()

		const router=useRouter()
		
		/*el componente no se monta-desmonta ya que se
		está utlizando keep-alive */
		onActivated(()=> {
			inputSearch.value.select()
		})

		return {
			pokemonId,
			inputSearch,
			
			onSubmit:()=>{
				//console.log('pokemon a buscar',pokemonId.value)
				router.push({name:'pokemon-id',params:{id:pokemonId.value}})
			}
		}

		
	},
}
</script>