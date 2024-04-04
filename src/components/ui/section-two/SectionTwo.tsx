'use client'

import Image from 'next/image'

import background from '../../../../public/background_big.webp'

import styles from './SectionTwo.module.scss'
import ArrowBigSvg from '@/components/elements/arrow/ArrowBigSvg'
import ArrowRightSmallSvg from '@/components/elements/arrow/ArrowRightSmallSvg'
import { scrollTo } from '@/utils/scroll-to/scrollTo'

export default function SectionTwo({ handleOpen }: { handleOpen: () => void }) {
	return (
		<section className={styles.wrapper}>
			<div className={styles.bgWrap}>
				<Image
					alt='Mountains'
					src={background}
					placeholder='blur'
					quality={100}
					sizes='100%'
					style={{
						height: '100%',
						width: '100%',
						objectFit: 'cover',
					}}
					priority={true}
					draggable={false}
				/>
			</div>
			<div className={styles.content}>
				<div onClick={() => handleOpen()}>
					<span>
						<p>Оставить заявку</p>
						<span>
							<ArrowBigSvg color='white' />
						</span>
					</span>
					<p>
						Рассчитаем стоимость для <br /> вашего объекта
					</p>
				</div>
				<div>
					<div>
						<p>
							Геодезическая съёмка всего объекта, <br /> нашими специалистами в
							подарок
						</p>
					</div>
					<div>
						<button
							role={'button'}
							aria-label='Рассчитать стоимость'
							onClick={() => scrollTo('section_seven')}
						>
							<span>
								Рассчитать стоимость <ArrowRightSmallSvg color='white' />
							</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
