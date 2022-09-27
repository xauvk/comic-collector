import { NavLink, Link, useNavigate } from "react-router-dom";

export default function NavBar({user, setUser}) {

    const nav = useNavigate()
   
    const handleLogout = () => {
        fetch('/logout', {method: 'DELETE'})
        setUser('')
        nav('/login')
    }

    return (
        <header className="shadow-sm">
            <div className="flex items-center justify-between h-16 max-w-screen-xl px-4 mx-auto">
                <div className="flex flex-1 w-0">
                    <Link className="p-2 text-black-900 bg-gray-100" exact to='/'>Comic Collection</Link>
                </div>

                <div className="flex items-center gap-4">
                    <span className="w-20 h-10 bg-gray-200 rounded-lg"></span>

                    <form className="hidden mb-0 lg:flex">
                        <div className="relative">
                            <input
                                className="h-10 pr-10 text-sm border-gray-200 rounded-lg focus:z-10"
                                placeholder="Search..."
                                type="text"
                            />

                            <button className="absolute inset-y-0 right-0 p-2 mr-px text-gray-600 rounded-r-lg"
                                type="submit">
                                <svg className="w-5 h-5" fill="currentColor"
                                viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" fill-rule="evenodd"/>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>

            {user ?
            <div className="items-center hidden gap-4 lg:flex">
                <h3 className='font-medium text-gray-600'>Welcome, {user.username}</h3>
                <NavLink className='px-5 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg' to='/mycollection'>My Collection</NavLink>
                <button className='px-5 py-3 text-xs font-medium text-white bg-blue-600 rounded' onClick={handleLogout}>Log Out</button> 
            </div>
            :
            <div className="items-center hidden gap-4 lg:flex">
              <NavLink  className="px-5 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg" to='/login'>Login</NavLink>
              <NavLink className='px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg'>Sign up</NavLink>
            </div>}
        </div>
    </header>
    )
}