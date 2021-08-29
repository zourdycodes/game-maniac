import { GameListContainer } from 'components/GameList/GameList.container'
import { ErrorBoundary } from 'hoc/withErrorBoundary'
import React from 'react'
import styled from 'styled-components'
import { breakpoints } from 'styles/breakpoints'

const Home: React.FC = () => {
	return (
		<HomeContainer>
			<GameListContainer />
		</HomeContainer>
	)
}

export default ErrorBoundary(Home)

const HomeContainer = styled.div`
	/* max-width: 1200px;
	margin: 50px auto; */

	/*  alternative use cases */
	display: flex;
	flex-direction: column;
	gap: 1rem;
	justify-content: center;
	align-items: center;

	@media (min-width: ${breakpoints.tablet}) {
		padding: 50px 300px;
		gap: 2rem;
	}
`
