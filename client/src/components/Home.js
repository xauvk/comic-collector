import IssueCard from "./IssueCard"

export default function Home({issues}) {


    
    const handleClick = () => {
        
    }

    const issueComponents = issues.map(i => {
        return (<IssueCard issue={i} onClick={handleClick}/>)
    })

    return (
        <>
        {issueComponents}
        </>
    )
}