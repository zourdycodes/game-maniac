import { useGlobalContext } from 'hooks/useGlobalContext'
import React, { ChangeEvent, ReactElement, useCallback, useState } from 'react'
import { GameList } from './GameList.render'

export const GameListContainer = (): ReactElement => {
	const { error, games } = useGlobalContext()

	return <GameList err={error} games={games} />
}
