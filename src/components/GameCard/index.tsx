import React from 'react'
import { Game } from 'types'

import {
	LinkContainer,
	ImageLink,
	CardInfo,
	CardTitle,
} from './styles/GameCard'

interface Props {
	content: Game
}

export const GameCard: React.FC<Props> = ({ content }: Props) => {
	const { id, title, thumbnail, short_description, genre } = content

	return (
		<LinkContainer to={`/game/${id}`}>
			<ImageLink src={thumbnail} alt={`${title} logo banner`} />

			<CardInfo>
				<CardTitle>{title}</CardTitle>
				<p>{short_description}</p>
				<p>{genre}</p>
			</CardInfo>
		</LinkContainer>
	)
}
