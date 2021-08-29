import { primaryTextColor, secondaryColor } from './../../../styles/theme/index'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkContainer = styled(Link)`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	width: 100%;
	background-color: ${secondaryColor};
	border-radius: 10px;
	text-decoration: none;
`
export const ImageLink = styled.img`
	width: 100%;

	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`

export const CardInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	padding: 0 12px;
	margin-bottom: 1rem;
`

export const CardTitle = styled.h2`
	font-size: 24px;
	font-weight: 500;
	color: ${primaryTextColor};
`
