import './stylesheets/App.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './components/Home'
import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Issue from './components/Issue'
import MyCollection from './components/MyCollection'
// import {AuthRoute} from './tools/Hooks';


function App() {
  const [user, setUser] = useState(null)
  const [issues, setIssues] = useState([])
  const [collections, setCollections] = useState([])
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    fetch('/me').then((res) => {
      if (res.ok) {
        res.json().then((u) => {
          setUser(u)
          setCollections(u.collections)
        })
      } else {
        res.json().then(json => setErrors(json.error))
      }
    })
    
    fetch('/all_issues')
      .then(res => {
        if(res.ok){
            res.json().then(r => setIssues(r.results))
        } else {
          res.json().then(data => setErrors(data.errors))
        }
      })

  }, [])
  
  const removeCollection = (c) => {
    setCollections(old => old.filter(oC => oC.id !== c.id))
  }
  
  if(errors) return <h1>{errors}</h1>

  return (
    <>
      <NavBar user={user} setUser={setUser}/>
      
      <Routes>
      
        <Route exact path='/' element={<Home issues={issues} user={user} removeCollection={removeCollection} setCollections={setCollections} />} />
      
        <Route path='/login' element={<Login setUser={setUser}/>} />
      
        <Route path='/signup' element={<SignUp setUser={setUser}/>} />
      
        <Route path='/mycollection' element={<MyCollection collections={collections} removeCollection={removeCollection} />} />

      </Routes>
    
    </>
  );
}

export default App;
