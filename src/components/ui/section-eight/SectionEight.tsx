'use client'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Suspense, lazy } from 'react'

import ResponsiveBox from './ResponsiveBox'
import styles from './SectionEight.module.scss'
import { partnersCardsList } from '@/shared/partners-cards-list-item.data'

const LazyPartnersCardsGalleryItem = lazy(
	() => import('../partners-cards-gallery-item/PartnersCardsGalleryItem')
)
const LazyGrid2 = lazy(() => import('@mui/material/Unstable_Grid2/Grid2'))

declare module '@mui/system' {
	interface BreakpointOverrides {
		desktop: true
		laptop: true
		tablet: true
		tabletXs: true
		mobile: true
		mobileXs: true

		xs: false
		sm: false
		md: false
		lg: false
		xl: false
	}
}

export default function SectionEight() {
	return (
		<section id='section_eight' className={styles.wrapper}>
			<div className={styles.content}>
				<h2 title='Наши партнёры'>Наши партнёры</h2>

				<ResponsiveBox style={{ flexGrow: 1, margin: -20 }}>
					<ThemeProvider
						theme={createTheme({
							breakpoints: {
								values: {
									desktop: 1280,
									laptop: 1024,
									tablet: 890,
									tabletXs: 600,
									mobile: 480,
									mobileXs: 360,
								},
							},
						})}
					>
						<Suspense>
							<LazyGrid2
								width={'100%'}
								container
								columns={{
									mobileXs: 2,
									mobile: 2,
									tabletXs: 4,
									tablet: 4,
									laptop: 4,
									desktop: 4,
								}}
							>
								{partnersCardsList.items.map((item, index) => (
									<LazyPartnersCardsGalleryItem item={item} key={index} />
								))}
							</LazyGrid2>
						</Suspense>
					</ThemeProvider>
				</ResponsiveBox>
			</div>
		</section>
	)
}
