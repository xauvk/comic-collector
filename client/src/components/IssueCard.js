import { NavLink } from "react-router-dom"

export default function IssueCard({issue, user, removeCollection, setCollections, collections}) {
    const collection = collections.find(c => c.issue_id === issue.id)
    const indexOfCollection = collections.findIndex( c => c.issue_id === issue.id)
    
    let status = ''
    if (collection !== undefined) {
        status = collection.status
    }

    const handleChange = e => {
        if (e.target.value !== "Remove") {
            fetch(`/collections/${collection.id}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({'status': e.target.value})
                }).then(r => r.json())
                .then(r => setCollections(oldC => {
                    const newC = [...oldC]
                    newC[indexOfCollection] = r
                    return newC
                }))
        } else {
            fetch(`/collections/${collection.id}`, {method: 'DELETE'})
            .then(removeCollection(collection))
        }
    }


    const addToCollection = () => {
        const newCollection = {name: issue.name, volume: issue.volume.name, description: issue.description, image: issue.image.medium_url, issue_number: issue.issue_number, id: issue.id}

        fetch('/collections', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(newCollection)
        }).then(r => r.json())
        .then(r => {
            setCollections(oldC => [...oldC, r])
        })
    }

    return (
        <div className="relative block border bg-lighty border-lighty">
            <a href={issue.site_detail_url}>
            <img src={issue.image.medium_url} alt={issue.name} className="object-contain w-full h-56 lg:h-72"/>
            </a>
            <p className="inline-block text-xs font-bold text-red">
            {issue.volume.name} #{issue.issue_number}
            </p>
            
            <p className="text-xs text-red">{issue.name}</p>
            <p className="text-xs text-red">{issue.cover_date}</p>

            { !user ? <NavLink className='text-s font text-red' to='/login'>Add to Collection [+]</NavLink> : null}

            { user && !collection ? <button className='text-s font text-red' onClick={addToCollection}>Add to Collection [+]</button>
            : null}

            { collection ?
            <div>
                <select name="status"
                id="status" 
                onChange={handleChange}
                className="block w-full text-sm font-medium bg-lighty text-red"
                defaultValue={status}>
                    <option disabled value=''> -- select an option -- </option>
                    <option value="Want to Read" >Want to Read</option>
                    <option value="Currently Reading" >Currently Reading</option>
                    <option value="Read" >Read</option>
                    {collection ?
                    <option value="Remove" >Remove from Collection</option>
                    : null}
                </select>
            </div>
            :  null}
            
        </div>
    )
}