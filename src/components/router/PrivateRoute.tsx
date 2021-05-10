import * as React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { LOGIN } from '../../config/Path'
import useAuthContext from '../../hooks/useAuthContext'
interface IProps {
    component: any
    exact?: boolean
    path?: any
}

export const PrivateRoute = ({ component: Component, ...props }: IProps) => {
    const { isAuthenticated } = useAuthContext()
    return (
        <Route
            {...props}
            render={(props) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={LOGIN} />
                )
            }
        />
    )
}
