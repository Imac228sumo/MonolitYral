'use client'

import cn from 'classnames'

import styles from './BlackCardsGalleryItem.module.scss'
import ArrowMediumSvg from '@/components/elements/arrow/ArrowMediumSvg'
import { IBlackCardItem } from '@/shared/black-cards-list.interface'
import { scrollTo } from '@/utils/scroll-to/scrollTo'

const BlackCardsGalleryItem = ({ item }: { item: IBlackCardItem }) => {
	return (
		<div
			onClick={() => scrollTo(item.href)}
			className={cn(styles.item, {
				[styles.notBlack]: !item.isBlack,
				[styles.notActive]: !item.isActive,
			})}
		>
			<button role={'button'} aria-label={item.title}>
				<div>
					<ArrowMediumSvg
						color={item.isActive ? (item.isBlack ? 'white' : '#000') : 'white'}
					/>
				</div>
				<p>{item.title}</p>
			</button>
		</div>
	)
}

export default BlackCardsGalleryItem
