export default function CollectionCard({collection, updatePage}) {
    const handleChange = e => {
        if (e.target.value !== "Remove") {
            fetch(`/collections/${collection.id}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({status: e.target.value})
            }).then(updatePage)
        } else {
            fetch(`/collections/${collection.id}`, {method: 'DELETE'})
            .then(updatePage)
        }
    }

    return (
        <div className="relative block border bg-lighty border-lighty">
            <img src={collection.issue.image} alt={collection.issue.name} className='object-contain w-full h-56 lg:h-72' />
            
            <p className="inline-block text-xs font-bold text-red">
            {collection.issue.volume} #{collection.issue.issue_number}
            </p>

            <p className="text-xs text-red">{collection.issue.name}</p>

            <select name="status" id="status" onChange={handleChange} defaultValue={collection.status} className="block w-full text-sm font-medium bg-lighty text-red" >
                <option disabled value=''> -- select an option -- </option>
                <option value="Want to Read" >Want to Read</option>
                <option value="Currently Reading" >Currently Reading</option>
                <option value="Read" >Read</option>
                <option value="Remove" >Remove from Collection</option>
            </select>

            
        </div>
    )
}