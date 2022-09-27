import IssueCard from "./IssueCard"

export default function Home({issues, user, removeCollection, setCollections}) {


    const issueComponents = issues.map(i => {
        return (<IssueCard className='' key={i.id} issue={i} user={user} removeCollection={removeCollection} setCollections={setCollections}/>)
    })

    return (
        <div className="grid grid-cols-4 gap-4 place-items-center">
        {issueComponents}
        </div>
    )
}