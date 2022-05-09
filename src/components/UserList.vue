<template>
	<ul>
		<li>
			<slot v-for="user in users" 
			:user=user
			:key="user.id"></slot>
			<!-- <h4>{{ first_name }} {{ last_name }}</h4>
			<h6>{{ email }}</h6> -->
		</li>
	</ul>
</template>

<script>
	export default {
		props:{
			users:{
				type: Array,
				required: true
			}
		}



	}
</script>

<style scoped>

ul{
	list-style: none;
}

</style>
