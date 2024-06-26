'use client'

import styles from './SectionOne.module.scss'
import ArrowSmallSvg from '@/components/elements/arrow/ArrowSmallSvg'

export default function SectionOne({ handleOpen }: { handleOpen: () => void }) {
	return (
		<section className={styles.wrapper}>
			<div className={styles.content}>
				<div>
					<p>Строительная компания</p>
					<p>
						<b>МОНОЛИТ</b>УРАЛ
					</p>
				</div>
				<div>
					<p>Мы создаем промышленные полы для вас</p>
				</div>
				<div
					onClick={() => handleOpen()}
					role={'button'}
					aria-label='Оставить заявку'
				>
					<div>
						<span>
							<p title='Оставить заявку'>Оставить заявку</p>
							<ArrowSmallSvg />
						</span>

						<p>
							Рассчитаем стоимость для <br /> вашего объекта
						</p>
					</div>
				</div>
			</div>

			<h1
				title='Наливной пол заказать от ООО "МонолитУрал"'
				style={{ height: 0, width: 0, position: 'absolute', opacity: 0 }}
			>
				{'Наливной пол заказать от ООО "МонолитУрал"'}
			</h1>

			<h2
				title='Наливной пол Челябинск'
				style={{ height: 0, width: 0, position: 'absolute', opacity: 0 }}
			>
				{'Наливной пол Челябинск'}
			</h2>
			<h2
				title='Наливной пол Екатеринбург'
				style={{ height: 0, width: 0, position: 'absolute', opacity: 0 }}
			>
				{'Наливной пол Екатеринбург'}
			</h2>
			<h2
				title='Наливное поле цена заказать'
				style={{ height: 0, width: 0, position: 'absolute', opacity: 0 }}
			>
				{'Наливное поле цена заказать'}
			</h2>
			<h2
				title='Промышленные полы купить Челябинск и Екатеринбург'
				style={{ height: 0, width: 0, position: 'absolute', opacity: 0 }}
			>
				{'Промышленные полы купить Челябинск и Екатеринбург'}
			</h2>

			<h3
				title='Рассчитать стоимость пола с помощью калькулятора'
				style={{ height: 0, width: 0, position: 'absolute', opacity: 0 }}
			>
				{'Рассчитать стоимость пола с помощью калькулятора'}
			</h3>
			<h3
				title='Залить бетонный пол, топпинговый пол в Челябинске'
				style={{ height: 0, width: 0, position: 'absolute', opacity: 0 }}
			>
				{'Залить бетонный пол, топпинговый пол в Челябинске'}
			</h3>
			<h3
				title='Зонирование и заливка полов в Челябинске'
				style={{ height: 0, width: 0, position: 'absolute', opacity: 0 }}
			>
				{'Зонирование и заливка полов в Челябинске'}
			</h3>
			<h3
				title='Заливка и установка бетонных, наливных полов'
				style={{ height: 0, width: 0, position: 'absolute', opacity: 0 }}
			>
				{'Заливка и установка бетонных, наливных полов'}
			</h3>
			<h3
				title='Залив жидкого полимерного наливного пола'
				style={{ height: 0, width: 0, position: 'absolute', opacity: 0 }}
			>
				{'Залив жидкого полимерного наливного пола'}
			</h3>

			<h4
				title='Шлифовка бетонного пола цена в Екатеринбурге'
				style={{ height: 0, width: 0, position: 'absolute', opacity: 0 }}
			>
				{'Шлифовка бетонного пола цена в Екатеринбурге'}
			</h4>
			<h4
				title='Ремонт и восстановление пола'
				style={{ height: 0, width: 0, position: 'absolute', opacity: 0 }}
			>
				{'Ремонт и восстановление пола'}
			</h4>
			<h4
				title='Разметка производственных и коммерческих помещений заказать'
				style={{ height: 0, width: 0, position: 'absolute', opacity: 0 }}
			>
				{'Разметка производственных и коммерческих помещений заказать'}
			</h4>
			<h4
				title='3D наливные полы заказать'
				style={{ height: 0, width: 0, position: 'absolute', opacity: 0 }}
			>
				{'3D наливные полы заказать'}
			</h4>
		</section>
	)
}
