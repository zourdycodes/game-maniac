import { useFetch } from 'hooks/useFetch'
import React, { ChangeEvent, ReactElement, useCallback, useState } from 'react'
import { GameList } from './GameList.render'

type Filter = {
	platform: string
	genre?: string
	tag?: string
	sortBy: string
}

export const GameListContainer = (): ReactElement => {
	const [filter, setFilter] = useState<Filter>({
		platform: 'browser',
		sortBy: 'relevance',
	})
	const { games, error } = useFetch(filter)

	const onFilterChange = useCallback((event: ChangeEvent<HTMLFormElement>) => {
		setFilter(current => ({
			...current,
			[event.target.name]: event.target.value,
		}))
		event.preventDefault()
	}, [])

	return <GameList err={error} games={games} onFilterChange={onFilterChange} />
}
