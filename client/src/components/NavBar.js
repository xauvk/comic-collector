import { NavLink, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function NavBar({user, setUser}) {

    const nav = useNavigate()
   
    const handleLogout = () => {
        fetch('/logout', {method: 'DELETE'})
        setUser('')
        nav('/login')
    }


    return (
        <>
            <Link className="" exact to='/'>comic collection</Link>
            
            {user ?
            <>
                <h3>Welcome, {user.username}</h3>
                <NavLink className="" exact to='/me'>My Collection</NavLink>
                <button onClick={handleLogout}>Log Out</button> 
            </>
            :
            <>
              <NavLink className="" exact to='/signup'>Sign up!</NavLink>
              <NavLink className="" exact to='/login'>Login</NavLink>
            </>}
        </>
    )
}