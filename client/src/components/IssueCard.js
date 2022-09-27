import { NavLink } from "react-router-dom";

export default function IssueCard({issue, user, removeCollection, setCollections}) {

    const handleChange = e => {
        const c = user.collections.find(c => c.issue_id === issue.id)
    
        if (c === undefined) {
            const i = {status: e.target.value, name: issue.name, volume: issue.volume.name, description: issue.description, image: issue.image.thumb_url, issue_number: issue.issue_number, id: issue.id}

            fetch('/collections', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(i)
            }).then(r => r.json())
            .then(r => {
                console.log(r)
                // setCollections(oC => [...oC, r])
            })
            
        } else {
            if (e.target.value !== "Remove") {
                fetch(`/collections/${c.id}`, {
                    method: 'PATCH',
                    headers: {'Content-Type': 'application/json'},
                    body:JSON.stringify({status: e.target.value})
                })
            } else {
                fetch(`/collections/${c.id}`, {method: 'DELETE'})
                .then(removeCollection(c))
            }
        }
    }

    var strippedHtml = issue.description.replace(/<[^>]+>/g, '')

    return (
        <div>
            <img src={issue.image.thumb_url} alt={issue.name} className='object-cover -mt-3 h-72'/>
            <h2>{issue.name}</h2>
            <h3>{issue.volume.name} #{issue.issue_number}</h3>
            {strippedHtml}

            { !user ?
            <NavLink className='px-5 py-3 text-xs font-medium text-white bg-blue-600 rounded' to='/login'>Login</NavLink>
            :
            <div>
                <select name="status" id="status" onChange={handleChange}>
                    <option disabled selected value > -- select an option -- </option>
                    <option value="Want to Read" >Want to Read</option>
                    <option value="Currently Reading" >Currently Reading</option>
                    <option value="Read" >Read</option>
                    <option value="Remove" >Remove from Collection</option>
                </select>
            </div>
            }
            
        </div>
    )
}