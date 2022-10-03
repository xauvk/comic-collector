import CollectionCard from "./CollectionCard"

export default function MyCollection({collections, updatePage}) {

    const collectionComponents = collections.map(c => {
        return (<CollectionCard key={c.id} collection={c} updatePage={updatePage} />)
    })

    return (
        <div className="grid grid-cols-7 gap-4 place-items-center mt-7">
            {collectionComponents}
        </div>
    )
}