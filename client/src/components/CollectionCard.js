export default function CollectionCard({collection, removeCollection}) {
    const handleChange = e => {
        if (e.target.value !== "Remove") {
            fetch(`/collections/${collection.id}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({status: e.target.value})
            })
        } else {
            fetch(`/collections/${collection.id}`, {method: 'DELETE'})
            .then(removeCollection(collection))
        }
    }

    return (
        <div>
            <img src={collection.issue.image} alt={collection.issue.name} className='object-cover -mt-3 h-72'/>
            <h2>{collection.issue.name}</h2>
            <h3>{collection.issue.volume} #{collection.issue.issue_number}</h3>
            {collection.issue.description}

            <div>
                <select name="status" id="status" onChange={handleChange}>
                    <option disabled selected value > -- select an option -- </option>
                    <option value="Want to Read" >Want to Read</option>
                    <option value="Currently Reading" >Currently Reading</option>
                    <option value="Read" >Read</option>
                    <option value="Remove" >Remove from Collection</option>
                </select>
            </div>
        </div>
    )
}