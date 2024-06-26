import { Paper, styled } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import cn from 'classnames'
import Image from 'next/image'
import { lazy } from 'react'

import styles from './ServicesCardsGalleryItem.module.scss'
import ArrowSmallSvg from '@/components/elements/arrow/ArrowSmallSvg'
import { IServicesCardItem } from '@/shared/services-cards-list-item.interface'
import { containsNumber } from '@/utils/string/containsNumber'

const LazyGrid2 = lazy(() => import('@mui/material/Unstable_Grid2/Grid2'))
const LazyServicesCardsItem = lazy(() => import('./ServicesCardsItem'))

interface ServicesCardsGalleryItemProps {
	item: IServicesCardItem
	handleOpen: () => void
}

const ServicesCardsGalleryItem = ({
	item,
	handleOpen,
}: ServicesCardsGalleryItemProps) => {
	const ServicesCardsItem = styled(Paper)(({ theme }) => ({
		transitionProperty: 'transform',
		transitionTimingFunction: 'ease-in-out',
		transitionDuration: '200ms',
		width: '100%',
		padding: '0px',
		boxShadow: 'none',
		backgroundColor: '#aaaaaa',
		borderRadius: '0px',
	}))

	const handleChange = () => {
		setTimeout(() => {
			handleOpen()
		}, 50)
	}

	return (
		<Grid2
			mobileXs={1}
			mobile={1}
			tablet={1}
			tabletXs={1}
			laptop={1}
			desktop={1}
			padding='5px 5px 5px 5px'
		>
			<ServicesCardsItem className={cn(styles.item)}>
				<div
					onClick={() => handleChange()}
					className={cn({
						[styles.withText]: item.image && item.title,
					})}
				>
					{item.image ? (
						<>
							<Image
								alt={item.title}
								title={item.subTitle}
								about={item.descriptions}
								src={item.image}
								priority
								draggable={false}
								sizes='100%'
								style={{
									objectPosition: 'center',
									objectFit: 'cover',
									pointerEvents: 'none',
									display: 'block',
									width: '100%',
									height: '100%',
								}}
							/>
							<div className={styles.content}>
								<div className={styles.black_line}></div>
								<div className={styles.title}>{item.title}</div>
								<div
									className={cn(styles.description, {
										[styles.withNumber]: containsNumber(item.descriptions),
									})}
								>
									{item.descriptions}
								</div>
							</div>
						</>
					) : (
						<>
							<div className={styles.request}>
								<div>
									<span>
										<h4 title='Оставить заявку'>Оставить заявку</h4>
										<ArrowSmallSvg />
									</span>

									<p>
										Рассчитаем стоимость для <br /> вашего объекта в течение
										<br /> 2-х часов
									</p>
								</div>
							</div>
						</>
					)}
				</div>
			</ServicesCardsItem>
		</Grid2>
	)
}

export default ServicesCardsGalleryItem
