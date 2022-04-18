<template>
	<h1>{{saludo}}</h1>
</template>

<script setup>
	import { ref, watch } from 'vue'


	const props=defineProps({
		message:{
			type:String,
			required:true,
		}
	})

	const saludo=ref(props.message)


	const changeSaludo=(newSaludo) => saludo.value=newSaludo


	watch(saludo,()=>{
		setTimeout(()=>{
			saludo.value=props.message
		},1500)
	})


	defineExpose({
		changeSaludo
	})
</script>