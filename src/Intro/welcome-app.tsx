
export function Welcome ({text}: {text:string}): JSX.Element{
    return (<>
    <div>Welcome to Shaozhe Li's APP!</div>
    <div>{text}</div>
    </>)
}

Welcome ({text:"dog"});