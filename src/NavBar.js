import React from 'react'; 
import { NavLink } from "react-router-dom"; 
import './NavBar.css'

function NavBar(){
    return (
        <nav className="NavBar">
            <NavLink exact to="/">
            Home
            </NavLink>
            <NavLink exact to="/chips">
            Chips
            </NavLink>
            <NavLink exact to="/drinks">
            Drinks
            </NavLink>
            <NavLink exact to="/candy">
            Candy
            </NavLink>
            <NavLink exact to="/cart">
            <i class="fas fa-shopping-cart">
             </i>
             {/* <p>[{cartItems.length}]</p> */}
            </NavLink>
          
        </nav>
    )
}

export default NavBar; 