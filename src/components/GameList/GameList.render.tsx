import React, { ChangeEvent } from 'react'
import { GameCard } from 'components/GameCard'
import { GameFilter } from 'components/GameFilter'

import { Game } from '../../types'
import { ListContainer, ListItem } from './styles/GameList'

interface Props {
	err?: string
	games: Game[]
	onFilterChange: (e: ChangeEvent<HTMLFormElement>) => void
}

export const GameList: React.FC<Props> = ({
	err,
	games,
	onFilterChange,
}: Props) => {
	if (err) {
		return <p>unable to fetch games</p>
	}

	if (games?.length < 0) {
		return <p>No Games Available</p>
	}

	return (
		<>
			<GameFilter onChange={onFilterChange} />
			<ListContainer>
				{games?.map(game => (
					<ListItem key={game.id}>
						<GameCard content={game} />
					</ListItem>
				))}
			</ListContainer>
		</>
	)
}
