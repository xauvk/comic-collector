export default function IssueCard({issue}) {

    const handleRemove = () => {

    }

    const desc = issue.description

    return (
        <div>
            
            <img src={issue.image.thumb_url} alt={issue.name} />
            <h3>{issue.name}</h3>
            <h3>#{issue.issue_number}</h3>
            {desc}
            <select name="status" id="status">
                <option value="volvo">Want to Read</option>
                <option value="saab">Currently Reading</option>
                <option value="mercedes">Read</option>
            </select>

            <button onClick={handleRemove} > Remove from Collection </button>
        </div>
    )
}