'use client'

import { Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import dynamic from 'next/dynamic'
import { Suspense, useRef } from 'react'
import 'swiper/css'
import 'swiper/css/mousewheel'
import 'swiper/css/pagination'
import 'swiper/css/virtual'

import styles from './SectionSix.module.scss'
import SlideButtons from './SlideButtons'

const DynamicSlider = dynamic(() => import('./Slider'), { ssr: false })

export default function SectionSix() {
	const is999 = useMediaQuery('(min-width:999px)')
	const swiperRef = useRef<any>(null)

	return (
		<section id='section_six' className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.container}>
					<section className={styles.left_side}>
						<div className={styles.text}>
							<Typography className={styles.title}>Проекты компании</Typography>
							<Typography className={styles.caption}>
								Компания МОНОЛИТУРАЛ имеет за плечами многолетний опыт
								сотрудничества с фундоментальными предприятиями и компаниями
								нашей страны, в их число входят: РМК, Союз пищепром, МЧС России
								и многие другие. Мы отвечаем за качество нашей работы!
							</Typography>
						</div>

						{is999 && <SlideButtons swiperRef={swiperRef} />}
					</section>
					<section className={styles.right_side}>
						<Suspense>
							<DynamicSlider swiperRef={swiperRef} />
						</Suspense>

						{!is999 && <SlideButtons swiperRef={swiperRef} size={'small'} />}
					</section>
				</div>
			</div>
		</section>
	)
}
