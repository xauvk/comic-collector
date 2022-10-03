import IssueCard from "./IssueCard"

export default function Browse({issues, user, updatePage}) {

    const collectionComponents = issues.map(i => {
        return (<IssueCard key={i.id} issue={i} user={user} updatePage={updatePage} />)
    })

    return (
        <div className="grid grid-cols-7 gap-4 place-items-center mt-7">
        {collectionComponents}
        </div>
    )
}