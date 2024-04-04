'use client'

import cn from 'classnames'
import Image from 'next/image'
import { FC, lazy } from 'react'

import styles from './PartnersCardsGalleryItem.module.scss'
import { IPartnersCardItem } from '@/shared/partners-cards-list-item.interface'

const LazyPartnersCardsItem = lazy(() => import('./PartnersCardsItem'))
const LazyResponsiveGrid = lazy(() => import('./ResponsiveGrid'))

const PartnersCardsGalleryItem: FC<{ item: IPartnersCardItem }> = ({
	item,
}) => {
	return (
		<LazyResponsiveGrid
			mobileXs={1}
			mobile={1}
			tablet={1}
			tabletXs={1}
			laptop={1}
			desktop={1}
		>
			<div>
				<LazyPartnersCardsItem className={cn(styles.item)}>
					<div>
						{item.image && (
							<>
								<Image
									title={item.seoTitle}
									about={item.seoTitle}
									alt={item.title || 'logo'}
									src={item.image}
									// fill
									draggable={false}
									sizes='41%'
									priority
									style={{
										height: '46.5%',
										width: '100%',
										objectFit: 'contain',
									}}
								/>
								{item.title && <div className={styles.title}>{item.title}</div>}
							</>
						)}
					</div>
				</LazyPartnersCardsItem>
			</div>
		</LazyResponsiveGrid>
	)
}

export default PartnersCardsGalleryItem
