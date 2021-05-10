import * as React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Dashboard from 'pages/Dashboard'
import { Login } from 'pages/Login'
import { Menu } from 'components/Menu'
import { NotFound } from 'pages/NotFound'
import { DASHBOARD, NOT_FOUND, LOGIN } from 'config/Path'

import './App.css'
import { PrivateRoute } from 'components/router/PrivateRoute'
import { PublicRoute } from 'components/router/PublicRoute'
import AuthContextProvider from 'context/AuthContext'

const App = (props: any) => {
    return (
        <div>
            <AuthContextProvider>
                <Router>
                    <Menu />
                    <Switch>
                        <PublicRoute exact path={LOGIN} component={Login} />
                        <PrivateRoute
                            exact
                            path={DASHBOARD}
                            component={Dashboard}
                        />
                        <PrivateRoute path={NOT_FOUND} component={NotFound} />
                    </Switch>
                </Router>
            </AuthContextProvider>
        </div>
    )
}

export default App
