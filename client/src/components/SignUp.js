import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp({setUser}) {

    const [formData, setFormData] = useState({
        username:'',
        password:''
    })

    const [error, setError] = useState([])
    const nav = useNavigate()

    const {username, password} = formData
    
    const onSubmit = (e) => {
        e.preventDefault()
        const user = {
            username,
            password
        }

        fetch('/login',{
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    setUser(user)
                    nav(`/me`)
                })
            }else {
                res.json().then(json => setError(json.error))
            }
        })
    } 

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    return (
        <section className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
            <div className="max-w-lg mx-auto">
                <form onSubmit={onSubmit} className="p-8 mt-6 mb-0 rounded-lg shadow-2xl space-y-4 bg-white">
                    <p class="text-lg font-medium text-center">Sign in to your account</p>
                    <div>
                        <label htmlFor="username" className="text-sm font-medium">Username</label>

                        <div class="relative mt-1">     
                            <input type='text' name='username' className="w-full p-4 pr-12 text-sm border-gray-200 border-2 rounded-lg shadow-sm"
                            placeholder="Enter Username"required onChange={handleChange}/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm font-medium">Password</label>
            
                        <div class="relative mt-1">
                            <input type='password' name='password' className="w-full p-4 pr-12 text-sm border-gray-200 border-2 rounded-lg shadow-sm" 
                            placeholder="Enter Password" required onChange={handleChange} />
                        </div>
                    </div>
                        
                    <button type="submit"  class="block w-full px-5 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg">Login</button>
                </form>
                {error ? <div class="text-white">{error}</div>:null}
            </div>
        </div>
    </section>
    )
}

export default SignUp