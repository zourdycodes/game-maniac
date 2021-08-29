import { GameListContainer } from 'components/GameList/GameList.container'
import { ErrorBoundary } from 'hoc/withErrorBoundary'
import React from 'react'
import styled from 'styled-components'

const Home: React.FC = () => {
	return (
		<HomeContainer>
			<GameListContainer />
		</HomeContainer>
	)
}

export default ErrorBoundary(Home)

const HomeContainer = styled.div`
	max-width: 1200px;
	margin: 50px auto;
`
