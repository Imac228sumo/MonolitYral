import styled from '@emotion/styled'
import { lazy } from 'react'

const LazyPaper = lazy(() => import('@mui/material/Paper'))

const PartnersCardsItem = styled(LazyPaper)(({ theme }) => ({
	transitionProperty: 'transform',
	transitionTimingFunction: 'ease-in-out',
	transitionDuration: '200ms',
	width: '100%',
	padding: '0px',
	boxShadow: 'none',
	backgroundColor: '#f6f6f6',
	borderRadius: '0px',
}))

export default PartnersCardsItem
