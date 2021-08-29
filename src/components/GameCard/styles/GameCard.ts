import {
	backgroundColor,
	primaryTextColor,
	secondaryColor,
	secondaryTextColor,
	tertiaryTextColor,
} from './../../../styles/theme/index'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { breakpoints } from 'styles/breakpoints'

export const LinkContainer = styled(Link)`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	width: 100%;
	height: 100%;
	background-color: ${secondaryColor};
	border-radius: 10px;
	text-decoration: none;
`
export const ImageLink = styled.img`
	width: 100%;

	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`

export const CardDetails = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	padding: 0 12px;
	margin-bottom: 1rem;

	@media (min-width: ${breakpoints.tablet}) {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`

export const CardTitle = styled.h2`
	font-size: 24px;
	font-weight: 500;
	color: ${primaryTextColor};

	@media (min-width: ${breakpoints.tablet}) {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`
export const CardDescription = styled.p`
	font-size: 16px;
	color: ${secondaryTextColor};
	@media (min-width: ${breakpoints.tablet}) {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`

export const IconTagContainer = styled.div`
	display: flex;
	justify-content: space-between;

	padding-top: 10px;
	padding-bottom: 0;
	margin-bottom: 0;
`

export const GenreTag = styled.p`
	padding: 5px 5px;
	margin: 0 8px 0 0;
	height: 100%;
	/* margin-left: auto; */

	border-radius: 5px;
	font-size: 13px;
	font-weight: bold;
	color: ${tertiaryTextColor};
	background-color: ${backgroundColor};
`

export const IconContainer = styled.div`
	display: flex;
	gap: 1rem;
	margin-left: 5px;
`

export const Icon = styled.img`
	width: 25px;
	height: 25px;
`
