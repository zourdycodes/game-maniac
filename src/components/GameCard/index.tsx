import React from 'react'
import { Game } from 'types'
import windowsIcon from 'assets/icons/windows.svg'
import browserIcon from 'assets/icons/browser.svg'

import {
	LinkContainer,
	ImageLink,
	CardDetails,
	CardTitle,
	CardDescription,
	GenreTag,
	Icon,
	IconContainer,
	IconTagContainer,
} from './styles/GameCard'
import { BROWSER, WINDOWS } from './constant'

interface Props {
	content: Game
}

export const GameCard: React.FC<Props> = ({ content }: Props) => {
	const { id, title, thumbnail, short_description, genre, platform } = content

	const icons = platform.split(',').map(p => {
		let icon

		switch (p.trim()) {
			case BROWSER:
				icon = (
					<Icon
						src={browserIcon}
						alt="browser icon game"
						key={`${id}-browser`}
					/>
				)

				break
			case WINDOWS:
				icon = (
					<Icon
						src={windowsIcon}
						alt="windows icon game"
						key={`${id}-windows`}
					/>
				)

				break

			default:
				break
		}

		return icon
	})

	return (
		<LinkContainer to={`/game/${id}`}>
			<ImageLink src={thumbnail} alt={`${title} logo banner`} />

			<CardDetails>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{short_description}</CardDescription>

				<IconTagContainer>
					<IconContainer>{icons}</IconContainer>

					<GenreTag>{genre}</GenreTag>
				</IconTagContainer>
			</CardDetails>
		</LinkContainer>
	)
}
