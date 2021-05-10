import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import useAuthContext from '../hooks/useAuthContext'

export const Dashboard = ({ ...props }: RouteComponentProps<any>) => {
    const { logout } = useAuthContext()
    return (
        <div>
            Dashboard
            <button onClick={logout}>Cerrar</button>
        </div>
    )
}

export default withRouter(Dashboard)
