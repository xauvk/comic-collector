import {Link} from 'react-router-dom'

export default function IssueCard({issue}) {

    const desc = issue.description

    return (
        <>
            <img src={issue.image.thumb_url} alt={issue.name} />
            <h3>{issue.name}</h3>
            <h3>{issue.volume.name} #{issue.issue_number}</h3>
            {desc}
        </>
    )
}