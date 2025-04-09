import type React from 'react'
import { useNavigate } from 'react-router-dom'

import type { User } from '../../../constants/interface'

import styles from './UserCardBlock.module.scss'

interface IUser {
	user: User
}

const UserBlock: React.FC<IUser> = ({ user }) => {
	const navigate = useNavigate()

	return (
		<div
			onClick={() => navigate(`/users/${user.id}`)}
			key={user.id}
			className={styles.wrapper}
		>
			<div className={styles.header}>
				<div className={styles.headerContent}>
					<span>{user.name}</span>
					<span>{user.lastname}</span>
				</div>
			</div>
			<div className={styles.avatar}>
				<img src={user.avatar} />
			</div>
		</div>
	)
}

export default UserBlock
