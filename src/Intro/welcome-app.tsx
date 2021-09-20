

function adder(first: number, second:number): number{
    return first + second;    
}

adder(1, 2)

function adderObj({first,second}: {first: number,second:number}): number{
    return first + second;
}


function adderData(data: {first: number, second: number}): number{
    return data.first+data.second;
}

adderObj({first: 1,second: 2})
adderData({first: 1, second: 2})

export function Welcome (): JSX.Element{
    return(
    <div>Welcome to Shaozhe Li's APP!</div>
    )
}

