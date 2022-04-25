<template>
	<h1>Aprendicendo slots</h1>
	<button @click="openModal">Abrir Modal</button>
	
	<the-modal 
		title="hola" 
		v-if="isOpen" 
		@on:close="closeModal">

		<template #header><!-- v-slot="header"-->
			<h2>Título del Modal</h2>
		</template>
		<template #body>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, harum repellat accusantium doloremque nobis minima</p>
		</template>
		<template #footer>
			<button @click="closeModal">Cerrar</button>
		</template>

		<template #exposed="{hola}">
		{{hola}}
		</template> 
		
	</the-modal>
</template>

<script>
	import TheModal from '@/components/TheModal.vue'
	import { ref } from 'vue'
	export default {
		components: { TheModal },
		setup(props,context) {

			

			const isOpen=ref(false)

			return {
				isOpen,

				openModal:() => isOpen.value=true,
				closeModal:() => isOpen.value=false,
			}
		},
	}
</script>

<style scoped></style>
