import React from 'react'
import logo from '../Utils/images/logo.png'

const Header = () => {
    return (
        <div className='relative overflow-hidden flex justify-center h-16 w-full shadow-lg items-center'>
            <img className='h-28 md:h-32 object-cover' src={logo} alt='logo'></img>
        </div>
    )
}

export default Header