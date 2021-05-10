import * as React from 'react'
import { useState } from 'react'
import useAuthContext from 'hooks/useAuthContext'
// @ts-ignore
import logo from 'asset/img/Switch-Logo.png'
interface IProps {}

export const Login = (props: IProps) => {
    const { login } = useAuthContext()
    const data = {
        username: 'marcos',
        password: 'marcos',
    }
    const [username, setUsername] = useState<string | null>(null)
    const [password, setPassword] = useState<string | null>(null)

    const handleSubmit = () => {
        if (username === data.username && password === data.password) {
            login()
        }
    }
    console.log(username)
    return (
        <>
            <div id='login-container'>
                <div className='login-left'>
                    <img src={logo} alt='logo Switch' />
                </div>
                <div className='login-right'>
                    <label>UserName:</label>
                    <input
                        name='username'
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label>Password:</label>
                    <input
                        name='password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </>
    )
}
