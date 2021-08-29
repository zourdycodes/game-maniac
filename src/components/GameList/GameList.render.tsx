import React from 'react'
import { GameCard } from 'components/GameCard'

import { Game } from '../../types'
import { ListContainer, ListItem } from './styles/GameList'

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
		<ListContainer>
			{games?.map(game => (
				<ListItem key={game.id}>
					<GameCard content={game} />
				</ListItem>
			))}
		</ListContainer>
	)
}
