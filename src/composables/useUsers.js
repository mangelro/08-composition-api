import axios from 'axios'
import { ref } from 'vue'

 const useUsers = () => {

	const users = ref([])
	const isLoading = ref(true)
	const currentPage = ref(1)
	const errorMessage = ref('')

	const getUser = async (page = 1) => {
		if (page <= 0) page = 1

		isLoading.value = true

		const { data } = await axios.get(
			`https://reqres.in/api/users?page=${page}`
		)

		if (data.data.length > 0) {
			users.value = data.data
			currentPage.value = page
			errorMessage.value = null
		} else if (currentPage.value > 0) {
			errorMessage.value = 'No existen más usuarios'
		}

		isLoading.value = false
	}

	getUser(1)

	return {
		users,
		isLoading,
		currentPage,
		errorMessage,
		nextPage: () => getUser(currentPage.value + 1),
		prevPage: () => getUser(currentPage.value - 1),
	}
}


export default useUsers