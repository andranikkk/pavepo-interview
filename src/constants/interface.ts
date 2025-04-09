export interface User {
	age: string
	avatar: string
	city: string
	createdAt: string
	gender: string
	id: number
	lastname: string
	name: string
	phone: string
	liked: boolean
}

export interface UsersState {
	users: User[]
	isLoading: boolean
}

export type SortDirection = 'asc' | 'desc' | 'none'

export interface IHeader {
	searchQuery: string
	setSearchQuery: React.Dispatch<React.SetStateAction<string>>

	checkboxState: boolean
	setCheckboxState: React.Dispatch<React.SetStateAction<boolean>>
}
