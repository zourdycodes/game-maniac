import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../../pages/Home'

import { HOME_ROUTES, GAME_INFO } from '../../constants/routes'
import { GameInfo } from 'pages/GameInfo'

export const App: React.FunctionComponent = () => {
	return (
		<Router>
			<Switch>
				<Route path={HOME_ROUTES} component={Home} exact />
				<Route path={GAME_INFO} component={GameInfo} />
			</Switch>
		</Router>
	)
}
