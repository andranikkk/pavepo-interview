import { FaRegArrowAltCircleLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import styles from './GoBack.module.scss'

const GoBack = () => {
	const navigate = useNavigate()
	const handleGoBack = () => {
		navigate(-1)
	}

	return (
		<button onClick={handleGoBack} className={styles.button}>
			<FaRegArrowAltCircleLeft />
			Back
		</button>
	)
}

export default GoBack
