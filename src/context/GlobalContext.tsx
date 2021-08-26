/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { Game } from 'types'
import { API_KEY, API_HOST } from './constant'

interface Provider {
	children: any
}

export const AppContext = createContext({} as any)

export const AppProvider = ({ children }: Provider): any => {
	const [games, setGames] = useState<Game[]>([])
	const [error, setError] = useState<string>('')

	useEffect(() => {
		axios
			.get('/games', {
				baseURL: `https://${API_HOST}/api`,
				headers: {
					'X-RapidAPI-Host': API_HOST,
					'X-RapidAPI-Key': API_KEY,
				},
				params: {
					platform: 'browser',
				},
			})
			.then(res => setGames(res.data))
			.catch(err => setError(err.message))
	}, [])

	console.log(games)

	return (
		<AppContext.Provider
			value={{
				games,
				error,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
