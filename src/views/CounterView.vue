<template>
	<h1>{{titleComputed}}</h1>

	<h3>Counter</h3>
	<h4>{{ counter }}</h4>

	<button @click="increase" ref="btnIncrease">+1</button>
	<button @click="decrease" ref="btnDecrease">-1</button>
</template>


<script setup>
	import { computed, ref, watch, onMounted, onUnmounted } from 'vue';
	import { useRoute } from 'vue-router'
	
	name:'Counter'

	const emit= defineEmits(['onIncrease','onDecrease'])

	const props=defineProps({

		initValue:{
			type:Number,
			required:true,
		}
	})
	
	const route=useRoute()

	//data
	const counter=ref(props.initValue)
	const btnIncrease=ref(null)
	let hdl=null

	

	//console.log(route.query)


	//Hooks
	onMounted(() => {
		
		btnIncrease.value.focus()

		hdl=setInterval(() => {
			btnIncrease.value.focus()	
		}, 1500);
	})

	onUnmounted(()=>{
		if (hdl)
			clearInterval(hdl)
	})



	//methods
	const decrease=()=>{
		const newValue=counter.value-1<0
			? 0 
			: counter.value--
			
			emit('onDecrease',newValue)
	} 

	const increase=()=>{
		emit('onIncrease',counter.value++)
	}

	watch(counter, ()=>{
		//console.log (route)
	})

	watch(()=>route.query.i,()=>{
		console.log ('change route',route.query.i)
		counter.value=route.query.i
	})
	
	const titleComputed= computed(()=> `El valor actual del contador es ${counter.value}`)

</script>


<!--// // <script>
// 	import useCounter from '@/composables/useCounter'

// 	export default {
// 		name: 'Counter',
// 		props: {},
// 		emits: [],
// 		setup() {
// 			const { counter, increase, decrease } = useCounter(15)

// 			//Todo lo que ha de ser visible en el <template> debe retornarse
// 			return { counter, increase, decrease }
// 		},
// 	}
// </script>
-->

<style scoped></style>
