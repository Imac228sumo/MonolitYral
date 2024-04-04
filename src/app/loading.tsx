import styles from './Loading.module.scss'

export default function Loading() {
	return (
		<div className={styles.wrapper}>
			<i className={styles.loader}></i>
		</div>
	)
}
