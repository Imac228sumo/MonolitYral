import styled from '@emotion/styled'
import { lazy } from 'react'

const LazyGrid2 = lazy(() => import('@mui/material/Unstable_Grid2/Grid2'))

const ResponsiveGrid = styled(LazyGrid2)(({ theme }) => ({
	padding: '20px',
	'@media (max-width: 1280px)': {
		padding: 'calc(15px + (5 + 5 * 3.539) * ((100vw - 998px) / 1280))',
	},
	'@media (max-width: 600px)': {
		padding: '12px',
	},
	'@media (max-width: 599px)': {
		padding: 'calc(10px + (2 + 2 * 9.7565) * ((100vw - 480px) / 1280))',
	},
	'@media (max-width: 480px)': {
		padding: '10px',
	},
}))

export default ResponsiveGrid
