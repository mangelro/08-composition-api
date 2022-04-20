import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const useTodos = ()=>{

	const store = useStore()

	const currentTap=ref('all')

	return {
	  currentTap,
	  
	  all: computed(() => store.getters.allTodos),
	  pending: computed(() => store.getters['pendingTodos']),
	  completed: computed(() => store.getters['completedTodos']),
	  getTodosByTab: computed(()=> store.getters['getTodosByTab'](currentTap.value)),

	  //methods
	  toggleTodo: (id) => store.commit('toggleTodo',id), //mutation
	}

}

export default useTodos