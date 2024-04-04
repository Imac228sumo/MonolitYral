import dynamic from 'next/dynamic'

import Loading from './loading'
import LayoutClient from '@/components/layout/LayoutClient'

const DynamicHome = dynamic(() => import('@/components/screens/home/Home'), {
	loading: () => <Loading />,
})

export default function HomePage() {
	return (
		<LayoutClient>
			<DynamicHome />
		</LayoutClient>
	)
}
