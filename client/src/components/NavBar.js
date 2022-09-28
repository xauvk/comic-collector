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
                    <Link exact='true' to='/'>
                        <img src="https://i.imgur.com/Lu15R4R.png" className="h-32 w-52 object-cover" alt='logo' />
                    </Link>
                    <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
                        <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <Link exact='true' to='/' className="text-yellow hover:text-red text-lg block pl-3 pr-4 py-2 md:text-yellow md:p-0 rounded focus:outline-none">Home</Link>
                            </li>
                            <li>
                                <Link to='/browse' className="text-yellow hover:text-red text-lg block pl-3 pr-4 py-2 md:text-yellow md:p-0 rounded focus:outline-none">Browse</Link>
                            </li>
                        {user ?
                        <>
                            <h3 className='text-yellow text-lg block pl-3 pr-4 py-2 md:text-yellow md:p-0 rounded focus:outline-none'>Welcome, {user.username}</h3>
                            <li>
                                <NavLink className="text-yellow text-lg hover:text-red border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0" to='/mycollection'>My Collection</NavLink>
                            </li>
                            <li>
                                <button className="text-yellow text-lg hover:text-red border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0" onClick={handleLogout}>Log Out</button>
                            </li> 
                        </>
                        :
                        <>
                            <li>
                                <NavLink className="text-yellow hover:text-red text-lg block pl-3 pr-4 py-2 md:text-yellow md:p-0 rounded focus:outline-none" to='/login'>Login</NavLink>
                            </li>
                            <li>
                                <NavLink className="text-yellow hover:text-red text-lg block pl-3 pr-4 py-2 md:text-yellow md:p-0 rounded focus:outline-none" to='/signup'>Sign up</NavLink>
                            </li>
                        </>}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}