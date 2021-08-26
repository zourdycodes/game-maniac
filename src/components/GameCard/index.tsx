import React from 'react'
import { Link } from 'react-router-dom'
import { Game } from 'types'

interface Props {
	content: Game
}

export const GameCard: React.FC<Props> = ({ content }: Props) => {
	const { id, title, thumbnail, short_description, genre } = content

	return (
		<Link to={`/game/${id}`}>
			<img src={thumbnail} alt={`${title} logo banner`} />
			<h2>{title}</h2>
			<p>{short_description}</p>
			<p>{genre}</p>
		</Link>
	)
}
