import * as React from 'react'
import { NavLink } from 'react-router-dom'

export const Menu = (props: any) => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink exact to='/' activeClassName='menu-item-active'>
                        /
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
