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
                    'Content-type': 'application/json'
                },
                body:JSON.stringify(user)
            }).then(res => {
                if(res.ok){
                    res.json().then(user => {
                        setUser(user)
                        nav(`/me`)
                    })
                }else {
                    res.json().then(json => setErrors(Object.entries(json.errors)))
                }
            })
        } else {alert(`Passwords don't match`)}
    } 

    const handleChange = (e) => {
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }

    return (
        <>
            <form onSubmit={onSubmit} className="p-8 mt-6 mb-0 rounded-lg shadow-2xl space-y-4 bg-white">
                <p class="text-lg font-medium text-center">Create your account</p>
                <div>
                    <label htmlFor="username" className="text-sm font-medium">Username</label>
                    <input type='text' name='username' className="w-full p-4 pr-12 text-sm border-gray-200 border-2 rounded-lg shadow-sm"
                                placeholder="Enter Username"required onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="password" className="text-sm font-medium">Password</label>
                    <input type='password' name='password' className="w-full p-4 pr-12 text-sm border-gray-200 border-2 rounded-lg shadow-sm" 
                                placeholder="Enter Password" required onChange={handleChange} />
                    
                </div>
                <div>
                    <label htmlFor="password" className="text-sm font-medium">Confirm Password</label>
                
                    <div class="relative mt-1">
                        <input type='password' name='passwordC' className="w-full p-4 pr-12 text-sm border-gray-200 border-2 rounded-lg shadow-sm" 
                                placeholder="Confirm Password" required onChange={handleChange} />
                    </div>
                </div>
                <button type="submit"  class="block w-full px-5 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg">Sign up!</button>
            </form>
                    {errors? errors.map(error => <div className="text-white"> * {error[1]} </div>) :null}
        </>
    )
}