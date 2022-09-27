import CollectionCard from "./CollectionCard"

export default function MyCollection({collections, removeCollection}) {

    const issueComponents = collections.map(c => {
        return (<CollectionCard key={c.id} collection={c} removeCollection={removeCollection} />)
    })

    return (
        <div className="grid grid-cols-4 gap-4 place-items-center">
        {issueComponents}
        </div>
    )
}