import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'

import { HOME_ROUTES } from '../constants/routes'

export const App: React.FunctionComponent = () => {
	return (
		<Router>
			<Switch>
				<Route path={HOME_ROUTES} component={Home} exact />
			</Switch>
		</Router>
	)
}
