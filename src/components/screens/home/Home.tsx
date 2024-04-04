'use client'

import { Suspense, lazy, useState } from 'react'

import styles from './Home.module.scss'
import SectionEight from '@/components/ui/section-eight/SectionEight'
import SectionFive from '@/components/ui/section-five/SectionFive'
import SectionFour from '@/components/ui/section-four/SectionFour'
import SectionOne from '@/components/ui/section-one/SectionOne'
import SectionSix from '@/components/ui/section-six/SectionSix'
import SectionThree from '@/components/ui/section-three/SectionThree'
import SectionTwo from '@/components/ui/section-two/SectionTwo'

const LazyModalWindow = lazy(
	() => import('@/components/ui/modal-window/ModalWindow')
)
const LazySectionSeven = lazy(
	() => import('@/components/ui/section-seven/SectionSeven')
)

export default function Home() {
	const [open, setOpen] = useState(false)

	const handleOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

	return (
		<div className={styles.wrapper}>
			<SectionOne handleOpen={handleOpen} />
			<SectionTwo handleOpen={handleOpen} />
			<SectionThree />
			<SectionFour />
			<SectionFive handleOpen={handleOpen} />

			<SectionSix />

			<LazySectionSeven />

			<SectionEight />

			<Suspense>
				<LazyModalWindow handleClose={handleClose} open={open} />
			</Suspense>
		</div>
	)
}
