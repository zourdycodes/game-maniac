import styled from 'styled-components'
import { breakpoints } from 'styles/breakpoints'

export const ListContainer = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;

	/* max-width: 1100px;
	margin: 0 auto; */
	padding: 0 16px;

	list-style-type: none;

	@media (min-width: ${breakpoints.tablet}) {
		grid-template-columns: repeat(2, minmax(350px, 1fr));
	}

	@media (min-width: ${breakpoints.desktop}) {
		grid-template-columns: repeat(3, minmax(350px, 1fr));
	}
`

export const ListItem = styled.li`
	margin-bottom: 24px;
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.02);
	}
`
