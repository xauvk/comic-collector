import './stylesheets/App.css';
import {Route, Routes} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './components/Home'
import NavBar from './components/NavBar';
import {AuthRoute} from './tools/hooks';


function App() {
  const [user, setUser] = useState("")
  const [issues, setIssues] = useState()

  useEffect(() => {
    fetch('/all_issues/')
    .then(res => res.json())
    .then(setIssues())
  },[])

  return (
    <>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home />}/>
      </Routes>
    </>
  );
}

export default App;
