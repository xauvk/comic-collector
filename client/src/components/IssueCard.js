import { NavLink } from "react-router-dom"

export default function IssueCard({issue, user, updatePage}) {
    const addToCollection = () => {
        const newCollection = {status:'Want to Read', name: issue.name,
        volume: issue.volume.name, description: issue.description,
        image: issue.image.medium_url, issue_number: issue.issue_number}

        fetch('/collections', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(newCollection)
        }).then(updatePage)
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

            { user ? <button className='text-s font text-red' onClick={addToCollection}>Add to Collection [+]</button>
            : null}            
        </div>
    )
}