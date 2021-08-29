/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState } from 'react'
import { useFetch } from 'hooks/useFetch'
import { Filter } from './types'

interface Provider {
	children: any
}

export const AppContext = createContext({} as any)

export const AppProvider = ({ children }: Provider): any => {
	const [filter, setFilter] = useState<Filter>({
		platform: 'browser',
		sortBy: 'relevance',
	})

	const { games, error } = useFetch(filter)

	return (
		<AppContext.Provider
			value={{
				games,
				error,
				setFilter,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
