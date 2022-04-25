
import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'


export default createStore({
	state: {
		todos:[
			{id:1, text:'Recolectar piedras del infinito', completed:false},
			{id:2, text:'Piedra del alma', completed:true},
			{id:3, text:'Piedra de poder', completed:true},
			{id:4, text:'Piedra de realidad', completed:false},
			{id:5, text:'Conseguir nuevos secuaces competentes', completed:false}
		]
	},
	getters: {
		//pendingTodos: (state,getters,rootState)=>{
		/*
		 * state =>  es el estado del modulo actual
		 * rootState => es el estado global 
		 * En esta caso ambos coinciden al no utilizar modules
		 */
		pendingTodos: (state,getters,rootState)=>{
		
			console.log(state,getters,rootState)
			return state.todos.filter(t=>!t.completed)
		},
				
		allTodos: (state)=>[...state.todos], //Evita las mutaciones del state

		completedTodos:(state)=>state.todos.filter(t=>t.completed),

		getTodosByTab: ( _ ,getters) => (tab)=>{
			console.log(tab)

			switch (tab){
				case 'all':
					return getters.allTodos
				case'pending':
					return getters.pendingTodos
				case 'completed':
					return getters.completedTodos
			}
		}

	},
	mutations: {

		toggleTodo(state,id){

			const idx=state.todos.findIndex(t=>t.id===id)
			
			if (idx > -1){
				state.todos[idx].completed = !state.todos[idx].completed
			}

		},
		createTodo(state,text=''){
			if (text.length===0) return;

			state.todos.push({
				id:uuidv4(),
				completed:false,
				text
			})
		}


	},
	actions: {},
	modules: {},
})

