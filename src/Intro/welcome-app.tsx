import {Person} from "../interface/person";




const lsz: Person = {name: "Shaozhe", hairColor: "black"}
const shaozhe: Person = {name: "Shaozhe Li", hairColor: "blue"}

const {name, hairColor} = lsz
console.log(name);

const [first, second] = [1,2]
console.log(first);

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

export function Welcome ({person}: {person:Person}): JSX.Element{
    return(<>
    <div>Welcome to Shaozhe Li's APP!</div>
    <div>{person.name}</div>
    </>)
}

/*export function Welcome (aPerson: Person): JSX.Element{
    return(<>
    <div>Welcome to Shaozhe Li's APP!</div>
    <div>{aPerson.name}</div>
    </>)
}
<Welcome name= "Shaozhe" hairColor = "black" ></Welcome>
*/
/*export function Welcome ({name, hairColor} : Person): JSX.Element{
    return(<>
    <div>Welcome to Shaozhe Li's APP!</div>
    <div>{aPerson.name}</div>
    </>)
}
<Welcome name= "Shaozhe" hairColor = "black" ></Welcome>
*/