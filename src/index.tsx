import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'
import { AppProvider } from './context/GlobalContext'
import { GlobalStyles } from './styles/GlobalStyles'

render(
	<AppProvider>
		<GlobalStyles />
		<App />
	</AppProvider>,
	document.getElementById('root')
)
