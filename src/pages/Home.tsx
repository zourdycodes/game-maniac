import { GameListContainer } from 'components/GameList/GameList.container'
import React from 'react'
import { withErrorBoundary } from 'hoc/withErrorBoundary'

const Home: React.FC = () => {
	return (
		<div>
			<GameListContainer />
		</div>
	)
}

export default Home
