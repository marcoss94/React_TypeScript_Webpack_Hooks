import * as React from 'react'
import { createContext } from 'react'
import { useCallback, useState, useMemo } from 'react'

export const AuthContext = createContext(null)

const AuthContextProvider = ({ children }: any) => {
    const token = window.localStorage.getItem('token')
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
        token ? true : false,
    )

    const login = useCallback(() => {
        window.localStorage.setItem('token', 'true')
        setIsAuthenticated(true)
    }, [])

    const logout = useCallback(() => {
        window.localStorage.removeItem('token')
        setIsAuthenticated(false)
    }, [])

    const value = useMemo(
        () => ({
            login,
            logout,
            isAuthenticated,
        }),
        [isAuthenticated, login],
    )
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
