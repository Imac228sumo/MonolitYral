import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const ResponsiveBox = styled(Box)(({ theme }) => ({
	margin: '-20px',
	'@media (max-width: 1280px)': {
		margin:
			'calc(-15px + (-5 + -5 * 3.539) * ((100vw - 998px) / 1280)) !important',
	},
	'@media (max-width: 600px)': {
		margin: '-12px !important',
	},
	'@media (max-width: 599px)': {
		margin:
			'calc(-10px + (-2 + -2 * 9.7565) * ((100vw - 480px) / 1280)) !important',
	},
	'@media (max-width: 480px)': {
		margin: '-10px !important',
	},
}))

export default ResponsiveBox
