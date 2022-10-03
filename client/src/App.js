import './stylesheets/App.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react'
import Browse from './components/Browse'
import NavBar from './components/NavBar'
import Login from './components/Login'
import SignUp from './components/SignUp'
import MyCollection from './components/MyCollection'
import Home from './components/Home'

function App() {
  const [user, setUser] = useState(null)
  const [allIssues, setAllIssues] = useState([])
  const [myCollections, setMyCollections] = useState([])
  const [allCollections, setAllCollections] = useState([])
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    updatePage()
    fetch('/all_issues')
      .then(res => {
        if(res.ok){
            res.json().then(r => setAllIssues(r.results))
        } else {
          res.json().then(data => setErrors(data.errors))
        }
      })
  }, [])
  
  const updatePage = () => {
    fetch('/me').then((res) => {
      if (res.ok) {
        res.json().then((u) => {
          setUser(u)
          setMyCollections(u.collections)
        })
      } else {
        res.json().then(json => setErrors(json.error))
      }
    })

    fetch('/collections').then((res) => {
      if (res.ok) {
        res.json().then((r) => setAllCollections(r))
      } else {
        res.json().then(json => setErrors(json.error))
      }
    })
  }

  const removeCollection = (c) => {
    setMyCollections(old => old.filter(oC => oC.id !== c.id))
  }


  if(errors) return <h1>{errors}</h1>

  return (
    <div className='bg-lighty bg-scroll bg-contain 
    overflow-auto m-auto h-screen w-screen'>

      <NavBar user={user} setUser={setUser} setCollections={setMyCollections}/>
      
      <Routes>
      
        <Route exact='true' path='/' element={<Home setErrors={setErrors} updatePage={updatePage} user={user} allCollections={allCollections}/>} />

        <Route path='/browse'
        element={<Browse issues={allIssues} user={user} updatePage={updatePage}/>} />
      
        <Route path='/login'
        element={<Login setUser={setUser} setCollections={setMyCollections}/>} />
      
        <Route path='/signup'
        element={<SignUp setUser={setUser}/>} />
      
        <Route path='/mycollection'
        element={<MyCollection collections={myCollections} updatePage={updatePage} />}
        />

      </Routes>
    
    </div>
  );
}

export default App;
