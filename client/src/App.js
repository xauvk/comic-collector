import './stylesheets/App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './components/Home'
import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from './components/SignUp';
// import {AuthRoute} from './tools/Hooks';


function App() {
  const [user, setUser] = useState()
  const [issues, setIssues] = useState([])
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    fetch('/all_issues')
      .then(res => {
        if(res.ok){
            res.json().then(r => setIssues(r.results))
        } else {
          res.json().then(data => setErrors(data.errors))
        }
      })
  },[])

  return (
    <BrowserRouter>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path='/' element={<Home issues={issues}/>} />
        <Route path='/login' element={<Login setUser={setUser}/>} />
        <Route path='/signup' element={<SignUp setUser={setUser}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
