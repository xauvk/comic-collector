import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({setUser, setCollections}) {

    const [form, setForm] = useState({})
    const [error, setError] = useState(null)
    
    const nav = useNavigate()

    const {username, password} = form
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }


    const onSubmit = (e) => {
        e.preventDefault()
        
        const user = {
            username,
            password
        }

        fetch('/login', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body:JSON.stringify(user)
        }).then(res => {
            if(res.ok) {
                res.json().then(user => {
                    setUser(user)
                    setCollections(user.collections)
                    nav(`/mycollection`)
                })
            } else {
                res.json().then(json => setError(json.error))
            }
        })
    } 

    return (
        <section className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto">
                <div className="max-w-lg mx-auto">
                    <form onSubmit={onSubmit} className="p-8 mt-6 mb-0 rounded-lg shadow-2xl space-y-4 bg-lightr">
                        <p className="text-lg font-medium text-center text-yellow">Sign in to your account</p>
                        
                        <div>
                            <label htmlFor="username" className="text-sm font-medium text-yellow">Username</label>

                            <div className="relative mt-1">     
                                <input type='text' name='username' className="w-full p-4 pr-12 text-sm border-lightr border-2 rounded-lg shadow-sm"
                                placeholder="Enter Username"required onChange={handleChange}/>
                            </div>
                        </div>
                        
                        <div>
                            <label htmlFor="password" className="text-sm font-medium text-yellow">Password</label>
                
                            <div className="relative mt-1">
                                <input type='password' name='password' className="w-full p-4 pr-12 text-sm border-lightr border-2 rounded-lg shadow-sm" 
                                placeholder="Enter Password" required onChange={handleChange} />
                            </div>
                        </div>
                            
                        <button type="submit"  className="block w-full px-5 py-3 text-sm font-medium text-lightr bg-yellow rounded-lg">Login</button>
                   
                    </form>
                    
                    {error ? 
                    <div className="p-2 rounded text-red" role="alert">
                        <strong className="text-sm font-medium">{error}</strong>
                    </div>
                        :null}
                </div>
            </div>
        </section>
    )
}

export default Login