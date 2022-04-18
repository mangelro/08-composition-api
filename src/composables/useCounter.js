import { ref } from 'vue'


const useCounter= (initValue = 5) =>{

		//data
		const counter=ref(initValue)


		/*
		 * Solo aquellos métodos referenciados dentro del propio
		 * setup() se definen dentro (¿private?)
		 */

		// const increase=()=>{
		// 	console.log()
		// 	counter.value++
		// }
		// const decrease= ()=>{
		// 	counter.value--
		// }

		//Debe retornarse todo lo que ha de ser visible en el setup
		return {
			//data
			counter,

			//methods
			decrease: () => {
				const newValue=counter.value-1<0
					? 0 
					: counter.value--
					
			} , 
			increase: () =>counter.value++
		}

}

export default useCounter