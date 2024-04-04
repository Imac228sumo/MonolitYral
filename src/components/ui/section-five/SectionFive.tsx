import { Box, ThemeProvider } from '@mui/material'
import createTheme from '@mui/material/styles/createTheme'
import { Suspense, lazy } from 'react'

import styles from './SectionFive.module.scss'
import { servicesCardsList } from '@/shared/services-cards-list-item.data'

const LazyServicesCardsGalleryItem = lazy(
	() => import('../services-cards-gallery-item/ServicesCardsGalleryItem')
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

export default function SectionFive({
	handleOpen,
}: {
	handleOpen: () => void
}) {
	return (
		<section id='section_five' className={styles.wrapper}>
			<div className={styles.content}>
				<h1>наши Услуги</h1>

				<Box style={{ flexGrow: 1 }}>
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
								spacing={0}
								columns={{
									mobileXs: 1,
									mobile: 1,
									tabletXs: 2,
									tablet: 2,
									laptop: 3,
									desktop: 3,
								}}
							>
								{servicesCardsList.items.map((item, index) => {
									return (
										<LazyServicesCardsGalleryItem
											handleOpen={handleOpen}
											item={item}
											key={index}
										/>
									)
								})}
							</LazyGrid2>
						</Suspense>
					</ThemeProvider>
				</Box>
			</div>
		</section>
	)
}
