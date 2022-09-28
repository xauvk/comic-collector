import IssueCard from "./IssueCard"

export default function Browse({issues, user, removeCollection, setCollections, collections}) {

    const collectionComponents = issues.map(i => {
        return (<IssueCard key={i.id} issue={i} user={user} removeCollection={removeCollection} setCollections={setCollections} collections={collections} />)
    })

    return (
        <div className="grid grid-cols-7 gap-4 place-items-center mt-7">
        {collectionComponents}
        </div>
    )
}