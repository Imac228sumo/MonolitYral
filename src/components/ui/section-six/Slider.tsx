import { Box, Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import classNames from 'classnames'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/mousewheel'
import 'swiper/css/pagination'
import 'swiper/css/virtual'
import {
	A11y,
	Mousewheel,
	Navigation,
	Pagination,
	Virtual,
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import styles from './SectionSix.module.scss'
import { slides } from '@/shared/slider-cards-list.data'
import { ISlide } from '@/shared/slider-cards-list.interface'

export default async function Slider({
	swiperRef,
}: {
	swiperRef: React.MutableRefObject<any>
}) {
	const is768 = useMediaQuery('(max-width:768px)')
	const [mySlides, setMySlides] = useState<ISlide[]>([])

	useEffect(() => {
		setMySlides(prev => slides)
	}, [])

	return (
		<Swiper
			ref={swiperRef}
			modules={[Navigation, Pagination, A11y, Mousewheel, Virtual]}
			slidesPerView={1}
			spaceBetween={10}
			className={styles.carousel}
			slidesPerGroup={is768 ? 1 : 2}
			mousewheel={{
				forceToAxis: true,
			}}
			rewind={true}
			breakpoints={{
				640: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				1024: {
					slidesPerView: 2,
					spaceBetween: 40,
				},
			}}
		>
			{mySlides.map((slide, index) => (
				<SwiperSlide
					key={slide.key}
					virtualIndex={index}
					className={styles.res_slide}
				>
					<>
						<Image
							about={slide.title + (slide.caption || slide.subTitle)}
							title={slide.seoTitle}
							alt={`photo of the floor\n ${slide.title}`}
							src={slide.image}
							fill={true}
							draggable={false}
							sizes='100%'
						/>
						<Box className={styles.media_information}>
							<Typography
								className={classNames(styles.media_title, {
									[styles.isCaption]: slide.caption,
								})}
							>
								{slide.title}
								<br />
								{slide.subTitle}
							</Typography>
							{slide.caption && (
								<Typography className={styles.media_caption}>
									{slide.caption}
								</Typography>
							)}
						</Box>
					</>
				</SwiperSlide>
			))}
		</Swiper>
	)
}
