import React from 'react'
import { NavLink } from 'react-router-dom'

export function NavBar() {
    const redirectToCart = () => {

    }
  return (
    <div>
    <NavLink to='/cart'>
    <button onClick={redirectToCart}>Cart</button>
    </NavLink>
    <NavLink to='/' >
    <button >Home</button>
    </NavLink>
    </div>
  )
}
