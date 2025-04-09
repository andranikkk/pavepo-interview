import axios from 'axios'
import type React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { BASE_URL } from '../../constants/constants'
import { User } from '../../constants/interface'
import { GoBack } from '../../components/ui/go-back'

import styles from './UserPage.module.scss'

export const UserPage: React.FC = () => {
	const [usersData, setUsersData] = useState<User>({} as User)
	const [error, setError] = useState<string | null>(null)
	const [loading, setLoading] = useState<boolean>(false)

	const params = useParams()

	useEffect(() => {
		const fetchUsersData = async () => {
			setLoading(true)

			try {
				const response = await axios.get(`${BASE_URL}/${params.id}`)

				setUsersData(response.data)
			} catch (error) {
				setError((error as Error).message)
			} finally {
				setLoading(false)
			}
		}

		fetchUsersData()
	}, [params.id])

	if (loading) return <div>Loading...</div>
	if (error) return <div>Error: {error}</div>
	if (!usersData) return <div>No data available</div>

	return (
		<div className={styles.wrapper}>
			<div className={styles.card}>
				<GoBack />
				<div className={styles.header}>
					<p>{usersData.name}</p>
					<p>{usersData.lastname}</p>
				</div>
				<div className={styles.content}>
					<div>
						<img src={usersData.avatar} className={styles.avatar} />
					</div>

					<div className={styles.info}>
						<p>
							<span>Age:</span> {usersData.age && usersData.age}
						</p>
						<p>
							<span>Gender:</span> {usersData.gender && usersData.gender}
						</p>
						<p>
							<span>Phone:</span> {usersData.phone && usersData.phone}
						</p>
						<p>
							<span>City:</span> {usersData.city && usersData.city}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
