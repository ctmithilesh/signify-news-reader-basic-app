import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <ul class="nav">
            <li>
                <Link to='/sports' style={{ textDecoration: 'none', color: 'black' }}>
                    Sports News
                </Link>
            </li>
            <li>
                <Link to='/business' style={{ textDecoration: 'none', color: 'black' }}>
                    Business News
                </Link>
            </li>
            <li>
                <Link to='/tech' style={{ textDecoration: 'none', color: 'black' }}>
                    Tech News
                </Link>
            </li>
        </ul>
    )
}

export default Menu
