import { /*useEffect,*/ useMemo, useState } from 'react'
import { useDebounce } from 'react-use'

import { getData } from '../../utils/getFilteredData'
// import { getUsers } from '../../app/slice'
// import { useAppDispatch, useAppSelector } from '../../app/hooks'

import type { User } from '../../constants/interface'
import { UserCardBlock } from '../../components/ui/userCard-block'
import { Header } from '../../components/ui/header'

import styles from './FetchUsers.module.scss'
import { fetchUsers } from '../../api/fetchUsers'
import { useQuery } from '@tanstack/react-query'

const FetchUsers: React.FC = () => {
	const [searchQuery, setSearchQuery] = useState('')
	const [checkboxState, setCheckboxState] = useState(false)
	const [filteredUsers, setFilteredUsers] = useState<User[]>([])

	/**  Если бы мы использовали RTK Query
		// const { users, isLoading } = useAppSelector(state => state.users)
		// const dispatch = useAppDispatch()

		// useEffect(() => {
		// 	dispatch(getUsers())
		// }, [dispatch])
	*/

	const { data: users = [], isLoading } = useQuery({
		queryKey: ['users'],
		queryFn: fetchUsers,
		staleTime: 1000 * 60 * 5, // 5 минут кэша
	})

	// useMemo предотвращает перерасчёт фильтрации и сортировки при каждом ререндере
	const { visibleItems } = useMemo(
		() =>
			getData({
				items: users,
				searchQuery: searchQuery.toLowerCase(),
				checkboxState,
			}),
		[users, searchQuery, checkboxState]
	)

	// useDebounce предотвращает "частые" обновления списка при быстром вводе
	useDebounce(
		() => {
			setFilteredUsers(visibleItems)
		},

		235,
		[visibleItems]
	)

	if (isLoading) return <div>Loading...</div>

	return (
		<div className={styles.wrapper}>
			<Header
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				checkboxState={checkboxState}
				setCheckboxState={setCheckboxState}
			/>
			<div className={styles.container}>
				{filteredUsers.map((user: User) => (
					<UserCardBlock key={user.id} user={user} />
				))}
			</div>
		</div>
	)
}

export default FetchUsers
