<template>
	<h1>Lista de tareas de Thanos</h1>
	<h4>Pendientes: {{ pending.length }}</h4>
	<hr />
	<button
		:class="{ active: currentTap === 'all' }"
		@click="currentTap = 'all'"
	>
		Todos
	</button>
	<button
		:class="{ active: currentTap === 'pending' }"
		@click="currentTap = 'pending'"
	>
		Pendientes
	</button>
	<button
		:class="{ active: currentTap === 'completed' }"
		@click="currentTap = 'completed'">
		Completados
	</button>

	<div>
		<ul>
			<li
				v-for="todo in getTodosByTab"
				:key="todo.id"
				:class="{ completed: todo.completed }"
				@dblclick="toggleTodo(todo.id)">
				{{ todo.text }}
			</li>
		</ul>
	</div>

	<button @click="openModal">Crear TODO</button>

	<the-modal v-if="isOpen" @on:close="closeModal">
		<template #header><h2>Crear nuevo TODO</h2></template>
		<template #body>
			<form @submit.prevent="onSubmit">
				<input
					type="text"
					v-model="txtTodo"
					placeholder="Descripción del TODO"/>
			</form>
		</template>
		<template #footer><button @click="onSubmit">Guardar</button></template>
	</the-modal>
</template>

<script>
	import { ref } from 'vue'
	import useTodos from '@/composables/useTodos'
	import TheModal from '@/components/TheModal.vue'

	export default {
		components: { TheModal },
		setup() {
			const {
				currentTap,
				getTodosByTab,
				pending,
				toggleTodo,
				createTodo,
			} = useTodos()

			const txtTodo = ref('')
			const isOpen = ref(false)
			
			const openModal= () => isOpen.value = true
			
			const closeModal= () => isOpen.value = false


			return {
				isOpen,
				txtTodo,
				currentTap,
				getTodosByTab,
				pending,
				toggleTodo,
				openModal,
				closeModal,
				onSubmit: () => {
					createTodo(txtTodo.value)
					txtTodo.value=''
					closeModal()
				},
			}
		},
	}
</script>

<style scoped>
	div {
		display: flex;
		justify-content: center;
		text-align: center;
	}

	ul {
		width: 300px;
		text-align: left;
	}

	li {
		cursor: pointer;
		margin: 10px 0;
	}
	.active {
		background-color: #2c3e50;
		color: white;
	}

	.completed {
		text-decoration: line-through;
	}
</style>
