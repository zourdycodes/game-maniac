import styled from 'styled-components'
import { backgroundColor, secondaryTextColor } from 'styles/theme'
import { breakpoints } from 'styles/breakpoints'

export const Form = styled.form`
	display: flex;
	justify-content: space-between;
	max-width: 542px;
	padding: 0 16px;
	margin: 30px 20px;
	margin-top: 50px;

	color: ${secondaryTextColor};

	gap: 2rem;

	@media (min-width: ${breakpoints.tablet}) {
		max-width: ${breakpoints.tablet};
	}
	@media (min-width: ${breakpoints.desktop}) {
		max-width: 1010px;
	}
`

export const Label = styled.label`
	display: flex;
	gap: 10px;
	align-items: center;

	font-size: 18px;
`

export const Select = styled.select`
	width: 100%;
	color: white;
	background-color: ${backgroundColor};
`
