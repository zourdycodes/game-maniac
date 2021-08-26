import { useContext } from 'react'
import { AppContext } from 'context/GlobalContext'
import { Game } from 'types'

interface Context {
	error: string
	games: Game[]
}

export const useGlobalContext = (): Context => {
	return useContext(AppContext)
}
