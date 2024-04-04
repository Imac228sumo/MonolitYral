'use client'

import styles from './HeaderContacts.module.scss'
// import PhoneSvg from '@/components/elements/phone-svg/PhoneSvg'
import PhoneSvg from '@/components/elements/phone-svg/PhoneSvg'
import { formattedPhone } from '@/utils/formatted-phone/formattedPhone'
import { getPhone } from '@/utils/get-env/getEnv'

export default function HeaderContacts() {
	return (
		<>
			<a
				role={'link'}
				aria-label='Номер телефона'
				href={`tel:${getPhone()}`}
				className={styles.contacts_mobile}
			>
				<PhoneSvg />
			</a>
			<a
				role={'link'}
				aria-label='Номер телефона'
				href={`tel:${getPhone()}`}
				className={styles.contacts}
			>
				<div className={styles.description}>Звонок бесплатный</div>
				<div className={styles.number}>
					{formattedPhone(getPhone() || '') || 'не доступно'}
				</div>
			</a>
		</>
	)
}
