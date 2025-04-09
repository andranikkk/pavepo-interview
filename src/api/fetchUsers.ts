import axios from 'axios'

import { BASE_URL } from '../constants/constants'
import { User } from '../constants/interface'

export const fetchUsers = async (): Promise<User[]> => {
	const response = await axios.get(BASE_URL)
	return response.data
}
