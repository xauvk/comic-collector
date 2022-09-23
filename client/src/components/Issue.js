import { useParams } from "react-router-dom"
import { useEffect, useState} from "react"

export default function Issue({issue, user}) {

    const [event, setEvents] = useState({})
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)

    const params = useParams()


    const handleRemove = () => {

        var dropDown = document.getElementById("status");
        dropDown.selectedIndex = 0
    }

    const handleChange = () => {

    }

    return (
        <div>
            <img src={issue.image.thumb_url} alt={issue.name} />
            <h3>{issue.name}</h3>
            <h3>{issue.volume.name} #{issue.issue_number}</h3>
            {issue.description}
            
            { !user ?
            <select name="status" id="status" onChange={handleChange}>
                <option disabled selected value> -- select an option -- </option>
                <option value="Want to Read">Want to Read</option>
                <option value="Currently Reading">Currently Reading</option>
                <option value="Read">Read</option>
            </select>
            :
            <>
            </>
            }
            <button onClick={handleRemove} > Remove from Collection </button>
        </div>
    )
}