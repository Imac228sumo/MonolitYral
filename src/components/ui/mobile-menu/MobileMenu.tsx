'use client'

import cn from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import Hamburger from 'hamburger-react'
import { useEffect, useRef, useState } from 'react'
import { useClickAway } from 'react-use'

import styles from './MobileMenu.module.scss'
import { menuSlide } from '@/animations/animations'
import InstagramLogoSvg from '@/components/elements/instagram-logo-svg/InstagramLogoSvg'
import MailLogoSvg from '@/components/elements/mail-logo-svg/MailLogoSvg'
import TelegramLogoSvg from '@/components/elements/telegram-logo-svg/TelegramLogoSvg'
import { routes } from '@/shared/routes-list.data'
import { formattedPhone } from '@/utils/formatted-phone/formattedPhone'
import {
	getEmail,
	getInstagram,
	getPhone,
	getTelegram,
} from '@/utils/get-env/getEnv'

export default function MobileMenu() {
	const [value, setValue] = useState('')
	const [isOpen, setOpen] = useState(false)
	const [headerHeight, setHeaderHeight] = useState(72)
	const [scrollHeight, setScrollHeight] = useState(0)
	const [animationComplete, setAnimationComplete] = useState(false)

	const ref = useRef(null)
	useClickAway(ref, () => setOpen(false))

	useEffect(() => {
		if (isOpen) {
			setValue(prev => '')
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [isOpen])

	useEffect(() => {
		const handleScroll = () => {
			setScrollHeight(window.scrollY)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const scrollToSection = (sectionId: string) => {
		const section = document.getElementById(sectionId)
		if (section) {
			const yOffset = -100 // желаемый отступ сверху в пикселях
			const y =
				section.getBoundingClientRect().top + window.pageYOffset + yOffset

			window.scrollTo({ top: y, behavior: 'smooth' })
		}
	}

	const closAndRoute = (sectionId: string) => {
		setValue(prev => sectionId)
		setOpen(prev => false)
	}

	useEffect(() => {
		if (animationComplete && !isOpen && value) {
			setTimeout(() => {
				scrollToSection(value)
			}, 500)
		}
	}, [animationComplete, value, isOpen])

	return (
		<>
			<div
				className={cn(styles.overlay, {
					[styles.active]: isOpen,
				})}
				style={{ marginTop: headerHeight - scrollHeight }}
			></div>
			<div ref={ref} className={styles.mobile_menu}>
				<Hamburger
					label='Навигация'
					toggled={isOpen}
					size={24}
					toggle={setOpen}
				/>

				<AnimatePresence mode='wait'>
					{isOpen && (
						<motion.div
							onAnimationComplete={() => setAnimationComplete(prev => true)}
							variants={menuSlide}
							initial='initial'
							animate='enter'
							exit='exit'
							className={styles.menu_container}
							style={{
								marginTop: headerHeight - scrollHeight,
								height: `calc(100% - ${headerHeight - scrollHeight}px)`,
							}}
						>
							<div className={styles.body}>
								<div className={styles.nav}>
									<div className={styles.title}>Навигация</div>
									{routes.map((route, index) => {
										return (
											<div key={index} className={styles.buttons}>
												<button
													role={'button'}
													aria-label={route.title}
													onClick={() => closAndRoute(route.href)}
												>
													{' '}
													{route.title}
												</button>
											</div>
										)
									})}
								</div>
								<div className={styles.footer}>
									<div className={styles.title}>Контакты</div>
									<div className={styles.contact}>
										<a
											role={'link'}
											aria-label={'Номер телефона для связи'}
											href={`tel:${getPhone()}`}
											onClick={() => setOpen(false)}
										>
											<div>Тел: </div>
											<div>
												{' '}
												{formattedPhone(getPhone() || '') || 'не доступно'}
											</div>
										</a>
									</div>
									<div className={styles.contact}>
										<a
											role={'link'}
											aria-label={'Адрес почты для связи'}
											href={`mailto:${getEmail()}`}
											onClick={() => setOpen(false)}
										>
											<div>Почта: </div>
											<div> {getEmail() || 'не доступно'}</div>
										</a>
									</div>
									<div className={styles.link}>
										<div>Cоциальные сети:</div>
									</div>
									<div>
										<div>
											<a
												role={'link'}
												aria-label={'Адрес телеграм для связи'}
												href={getTelegram() || ''}
												onClick={() => setOpen(false)}
											>
												<TelegramLogoSvg />
											</a>
										</div>
										<div>
											<a
												role={'link'}
												aria-label={'Адрес мэил для связи'}
												href={`mailto:${getEmail()}`}
												onClick={() => setOpen(false)}
											>
												<MailLogoSvg />
											</a>
										</div>
										<div>
											<a
												role={'link'}
												aria-label={'Адрес инстаграм для связи'}
												href={getInstagram() || ''}
												onClick={() => setOpen(false)}
											>
												<InstagramLogoSvg />
											</a>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</>
	)
}
