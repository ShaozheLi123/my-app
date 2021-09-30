

export function Feedback ({feedback, setFeedback}: 
    {feedback: string, setFeedback: (f: string)=> void}): JSX.Element{
       return <div><strong>Check Your Answer: </strong> {feedback}</div> 
}