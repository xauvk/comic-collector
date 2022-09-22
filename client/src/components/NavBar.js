import { NavLink, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function NavBar({user, setUser}) {

    const nav = useNavigate()
   
    const handleLogout = () => {
        fetch('/logout', {method: 'DELETE'})
        setUser('')
        nav('/login')
    }

    useEffect(() => {
        fetch('/me').then((res) => {
          if (res.ok) {
            res.json().then((user) => {
              setUser(user)
            })
          }
        })
      }, [])


    return (
        <>
            <Link className="text-4xl font-bold text-center text-blue-500 font-style italic" exact to='/'>comic collection</Link>
            {user ?
            <>
                <h3>Welcome, {user.username}</h3>
                <NavLink className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:text-blue-500 hover:bg-gray-200 py-1 px-3" exact to='/me'>My Inventory</NavLink>
                <NavLink className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:text-blue-500 hover:bg-gray-200 py-1 px-3" exact to='/createEvent'>Create New Event</NavLink>
                <button onClick={handleLogout}>Log Out</button> 
            </>
            :
            <>
            <NavLink className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:text-blue-500 hover:bg-gray-200 py-1 px-3" exact to='/signup'>Sign up!</NavLink>
            <NavLink className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:text-blue-500 hover:bg-gray-200 py-1 px-3" exact to='/login'>Login</NavLink>
            </>}
        </>
    )
}