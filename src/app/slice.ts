import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { BASE_URL } from '../constants/constants'
import type { User, UsersState } from '../constants/interface'

export const getUsers = createAsyncThunk('users/getUsers', async () => {
	try {
		const resp = await axios.get(`${BASE_URL}`, {})

		return resp.data
	} catch (error) {
		console.error('Error fetching users', error)
		throw error
	}
})

const initialState: UsersState = {
	users: [],
	isLoading: true,
}

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUsers(state, action: PayloadAction<User[]>) {
			state.users = action.payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(getUsers.pending, state => {
				state.isLoading = true
			})

			.addCase(getUsers.fulfilled, (state, action) => {
				state.isLoading = false
				state.users = action.payload
			})

			.addCase(getUsers.rejected, state => {
				state.isLoading = false
			})
	},
})

export const { setUsers } = usersSlice.actions

export default usersSlice.reducer
