import type { User } from '../constants/interface'

type GetListDataType = {
	items: User[]
	searchQuery: string
	checkboxState: boolean
}

export const getData = ({
	items,
	searchQuery,
	checkboxState,
}: GetListDataType) => {
	const filtered = filterListData(items, searchQuery)
	const sorted = sortListData(filtered, checkboxState)

	return { visibleItems: sorted }
}

const filterListData = (items: Array<User>, searchQuery: string) => {
	return items.filter(
		(item: User) =>
			item.name.toLowerCase().includes(searchQuery) ||
			item.lastname.toLowerCase().includes(searchQuery)
	)
}

const sortListData = (items: Array<User>, checkboxState: boolean) => {
	if (checkboxState) {
		return items.sort((a, b) => a.city.localeCompare(b.city))
	}

	return items
}
