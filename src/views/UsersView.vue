<template>
	<h2 v-if="isLoading">Espere por favor</h2>
	<h2 v-else>Usuarios</h2>
	<h5 v-if="errorMessage">{{ errorMessage }}</h5>

	<div v-if="users.length > 0">
		<user-list :users=users v-slot="{user}">
			<h5>{{user.first_name}} {{user.last_name}}</h5>				
			<h6>{{user.email}}</h6>				
		</user-list>
	</div>
	<button @click="prevPage">Atrás</button>
	<button @click="nextPage">Siguiente</button>
	<span>Página: {{ currentPage }}</span>
</template>

<script>
	import useUsers from '@/composables/useUsers'
	import UserList from '@/components/UserList.vue';

	export default {
		components:{UserList},
		setup() {
			 const {
				users,
				isLoading,
				currentPage,
				errorMessage,
				nextPage,
				prevPage } = useUsers()
		
		
			return {
				users,
				isLoading,
				currentPage,
				errorMessage,
				nextPage,
				prevPage
			}

			//return {...useUsers()}
		}

	}
</script>

<style scope>
	h2 {
		text-align: center;
		width: 100%;
	
	}
	div {
		text-align: center;
		justify-content: center;
		display: block;
	}
	ul {
		width: 250px;
		display: block;
	}
</style>
