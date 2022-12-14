import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp({setUser}) {

    const [form, setForm] = useState({
        username:'',
        password:'',
        passwordC: ''
    })

    const [errors, setErrors] = useState([])
    const nav = useNavigate()

    const {username, password, passwordC} = form

    const onSubmit = (e) => {
        e.preventDefault()
        if (password === passwordC) {
            const user = {
                username,
                password
            }

            fetch('/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(user)
            }).then(res => {
                if(res.ok){
                    res.json().then(user => {
                        setUser(user)
                        nav(`/`)
                    })
                } else {
                    res.json().then(json => setErrors(Object.entries(json.errors)))
                }
            })
        } else {
            setErrors([[1, `Passwords don't match`]])
        }
    } 

    const handleChange = (e) => {
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }

    return (
        <section className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto">
                <div className="max-w-lg mx-auto">
                    <form onSubmit={onSubmit} className="p-8 mt-6 mb-0 rounded-lg shadow-2xl space-y-4 bg-lightr">
                        <p className="text-lg font-medium text-center text-yellow">Create your account</p>
                        
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
                        
                        <div>
                            <label htmlFor="password" className="text-sm font-medium text-yellow">Confirm Password</label>
                        
                            <div className="relative mt-1">
                                <input type='password' name='passwordC' className="w-full p-4 pr-12 text-sm border-lightr border-2 rounded-lg shadow-sm" 
                                        placeholder="Confirm Password" required onChange={handleChange} />
                            </div>
                        </div>
                        
                        <button type="submit"  className="block w-full px-5 py-3 text-sm font-medium text-lightr bg-yellow rounded-lg">Sign up!</button>
                    
                    </form>
                    
                    {errors ? errors.map(error => {
                                return (
                                    <div className="p-2 text-red" role="alert">
                                        <strong class="text-sm font-medium">{error[1]}</strong>
                                    </div>
                                )
                            }
                        )
                    : null }
                </div>
            </div>
        </section>
    )
}