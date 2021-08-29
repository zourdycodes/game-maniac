import { GameListContainer } from 'components/GameList/GameList.container'
import React from 'react'
import styled from 'styled-components'

const Home: React.FC = () => {
	return (
		<HomeContainer>
			<GameListContainer />
		</HomeContainer>
	)
}

export default Home

const HomeContainer = styled.div`
	max-width: 1200px;
	margin: 50px auto;
`
