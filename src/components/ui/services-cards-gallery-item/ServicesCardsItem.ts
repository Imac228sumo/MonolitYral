import styled from '@emotion/styled'
import { Paper } from '@mui/material'

const ServicesCardsItem = styled(Paper)(({ theme }) => ({
	transitionProperty: 'transform',
	transitionTimingFunction: 'ease-in-out',
	transitionDuration: '200ms',
	width: '100%',
	padding: '0px',
	boxShadow: 'none',
	backgroundColor: '#aaaaaa',
	borderRadius: '0px',
}))

export default ServicesCardsItem
