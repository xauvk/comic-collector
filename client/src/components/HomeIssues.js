export default function HomeIssues({collection}) {
    
    return (
        <div className="relative block border bg-lighty border-lighty">
            <img src={collection.issue.image} alt={collection.issue.name} className='object-contain w-full h-56 lg:h-72' />
            
            <p className="inline-block text-xs font-bold text-red">
            {collection.issue.volume} #{collection.issue.issue_number}
            </p>

            <p className="text-xs text-red">{collection.issue.name}</p>

            <p className="text-xs text-red">{collection.user.username}: {collection.status}</p>
            
        </div>
    )
}