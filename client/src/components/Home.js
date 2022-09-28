import { useState } from 'react'
import HomeIssues from './HomeIssues'

export default function Home({setErrors, removeCollection, setCollections, collections, user}) {
    const [issues, setIssues] = useState([])

    fetch(`/issues`)
      .then(res => {
      if(res.ok){
          res.json().then(r => setIssues(r))
      } else {
        res.json().then(data => setErrors(data.errors))
      }
    })

    const issueComponents = issues.map(i => {
        return (<HomeIssues key={i.id} issue={i} removeCollection={removeCollection} collections={collections} setCollections={setCollections} user={user}/>)
    })

    return (
        <div className="grid grid-cols-7 gap-4 place-items-center mt-7">
            {issueComponents}
        </div>
    )
}