import { Suspense, lazy } from 'react'

import HeaderContacts from '../header-contacts/HeaderContacts'
import Logo from '../logo/Logo'
import NavBar from '../nav-bar/NavBar'

import styles from './Header.module.scss'

const LazyMobileMenu = lazy(() => import('../mobile-menu/MobileMenu'))

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.content}>
				<div className={styles.wrapper}>
					<Suspense>
						<LazyMobileMenu />
					</Suspense>

					<Logo />
					<NavBar />
					<HeaderContacts />
				</div>
			</div>
		</header>
	)
}
