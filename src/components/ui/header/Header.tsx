import { IHeader } from '../../../constants/interface'

import styles from './Header.module.scss'

const Header: React.FC<IHeader> = ({
	searchQuery,
	setSearchQuery,
	checkboxState,
	setCheckboxState,
}) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<input
					type='text'
					className={styles.input}
					placeholder='Search'
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
				/>

				<div>
					<label htmlFor='' className={styles.sort}>
						Sort by city
						<input
							type='checkbox'
							onClick={() => setCheckboxState(!checkboxState)}
						/>
					</label>
				</div>
			</div>
		</div>
	)
}

export default Header
