import CollectionCard from "./CollectionCard"

export default function MyCollection({collections, removeCollection, setCollections}) {

    const issueComponents = collections.map(c => {
        return (<CollectionCard key={c.id} collection={c} removeCollection={removeCollection} collections={collections} setCollections={setCollections} />)
    })

    return (
        <div className="grid grid-cols-7 gap-4 place-items-center mt-7">
        {issueComponents}
        </div>
    )
}