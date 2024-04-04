import BlackCardsGalleryItem from '../black-cards-gallery-item/BlackCardsGalleryItem'

import styles from './SectionFour.module.scss'
import { blackCardsList } from '@/shared/black-cards-list.data'

export default function SectionFour() {
	return (
		<section className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.container}>
					<section>
						<section>
							<span>15</span>
						</section>
						<section>
							<BlackCardsGalleryItem item={blackCardsList.items[0]} />
							<BlackCardsGalleryItem item={blackCardsList.items[1]} />
						</section>
					</section>

					<section>
						<BlackCardsGalleryItem item={blackCardsList.items[2]} />
						<BlackCardsGalleryItem item={blackCardsList.items[3]} />
						<BlackCardsGalleryItem item={blackCardsList.items[4]} />
						<BlackCardsGalleryItem item={blackCardsList.items[5]} />
					</section>
				</div>
			</div>
		</section>
	)
}
