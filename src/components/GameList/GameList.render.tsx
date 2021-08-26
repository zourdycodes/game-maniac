import React from 'react'
import { GameCard } from 'components/GameCard'

import { Game } from '../../types'

interface Props {
	err?: string
	games: Game[]
}

export const GameList: React.FC<Props> = ({ err, games }: Props) => {
	if (err) {
		return <p>unable to fetch games</p>
	}

	if (games?.length < 0) {
		return <p>No Games Available</p>
	}

	return (
		<ul>
			{games?.map(game => (
				<li key={game.id}>
					<GameCard content={game} />
				</li>
			))}
		</ul>
	)
}
