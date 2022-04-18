<template>
	<div class="home">
		<h1>Reactive vs Ref</h1>
		<h3>{{ ironman }}</h3>
		<h3>{{ hulk }}</h3>

		<h4>Hulk {{ hulkIsAlive }}</h4>
		<button @click="changeIronman">Cambiar Ironman</button>
		<button @click="changeHulk">Cambiar Hulk</button>
		<button @click="changeStatus">Cambiar Estado</button>
	</div>
</template>

<script>
	import { ref, reactive } from 'vue'
	export default {
		name: 'HomeView',
		setup() {
			const ironman = ref({ name: 'Tony', age: 30 })
			const hulk = reactive({ name: 'Bruce', age: 50 })

		//	const ironmanIsAlive = reactive(false) // tipos primitivos no puede ser reative
			const hulkIsAlive = ref(true)

			const changeStatus = () => {
				hulkIsAlive.value = !hulkIsAlive.value
			}

			return {
				ironman,
				hulk,
			//	ironmanIsAlive,
				hulkIsAlive,

				changeStatus,
				changeIronman: () => {
					ironman.value.name = 'Tony Stark'
					ironman.value.age = 55
				},

				changeHulk: () => {
					hulk.name = 'Bruce Banner'
					hulk.age = 45
				},
			}
		},
	}
</script>

