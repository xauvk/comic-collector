import HomeIssues from './HomeIssues'

export default function Home({allCollections}) {
    const issueComponents = allCollections.map(c => {
        return (<HomeIssues key={c.id} collection={c} />)
    })

    return (
        <div className="grid grid-cols-7 gap-4 place-items-center mt-7">
            {issueComponents}
        </div>
    )
}