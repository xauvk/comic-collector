import { NavLink, Link, useNavigate } from "react-router-dom";

export default function NavBar({user, setUser, setCollections}) {

    const nav = useNavigate()
   
    const handleLogout = () => {
        fetch('/logout', {method: 'DELETE'})
        setUser('')
        setCollections([])
        nav('/login')
    }

    return (
        <div className="mx-auto bg-lightr">
            <nav className="border-gray-200">
                <div className="container mx-auto flex flex-wrap items-center justify-between">
                    <Link exact to='/'>
                        <img src="https://i.imgur.com/Lu15R4R.png" className="h-32 w-52 object-cover" alt='logo' />
                    </Link>
                    <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
                        <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                        {user ?
                        <>
                            <li>
                                <Link exact to='/' className="text-yellow block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded focus:outline-none">Home</Link>
                            </li>
                                <h3 className='text-yellow'>Welcome, {user.username}</h3>
                            <li>
                                <NavLink className="text-yellow hover:text-red border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0" to='/mycollection'>My Collection</NavLink>
                            </li>
                            <li>
                                <button className="text-yellow hover:text-red border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0" onClick={handleLogout}>Log Out</button>
                            </li> 
                        </>
                        :
                        <>
                            <li>
                                <Link exact to='/' className="text-yellow hover:text-red block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded focus:outline-none">Home</Link>
                            </li>
                            <li>
                                <NavLink className="text-yellow hover:text-red border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0" to='/login'>Login</NavLink>
                            </li>
                            <li>
                                <NavLink className="text-yellow hover:text-red border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0" to='/signup'>Sign up</NavLink>
                            </li>
                        </>}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}