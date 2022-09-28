import { NavLink } from "react-router-dom";

export default function IssueCard({issue, user, removeCollection, setCollections, collections}) {

    const c = collections.find(c => c.issue_id === issue.id)
    const i = collections.findIndex( c => c.issue_id === issue.id)
    let status = ''
    
    if (c !== undefined) {
        status = c.status
    }

    const handleChange = e => {
        if (c === undefined) {
            const i = {status: e.target.value, name: issue.name, volume: issue.volume.name, description: issue.description, image: issue.image.medium_url, issue_number: issue.issue_number, id: issue.id}

            fetch('/collections', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(i)
            }).then(r => r.json())
            .then(r => {
                setCollections(oC => [...oC, r])
            })
            
        } else {
            if (e.target.value !== "Remove") {
                fetch(`/collections/${c.id}`, {
                    method: 'PATCH',
                    headers: {'Content-Type': 'application/json'},
                    body:JSON.stringify({'status': e.target.value})
                }).then(r => r.json())
                .then(r => setCollections(old => {
                    const n = [...old]
                    n[i] = r
                    return n
                }))
            } else {
                fetch(`/collections/${c.id}`, {method: 'DELETE'})
                .then(removeCollection(c))
            }
        }
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



            { !user ?
            <NavLink className='text-s font text-red' to='/login'>Add to Collection [+]</NavLink>
            :
            <div>
                <select name="status" id="status" onChange={handleChange} className="block w-full text-sm font-medium bg-lighty text-red"  defaultValue={ status }>
                    <option disabled value=''> -- select an option -- </option>
                    <option value="Want to Read" >Want to Read</option>
                    <option value="Currently Reading" >Currently Reading</option>
                    <option value="Read" >Read</option>
                    {c ?
                    <option value="Remove" >Remove from Collection</option>
                    : null}
                </select>
            </div>
            }
            
        </div>
    )
}