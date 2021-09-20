import {Person} from "../interface/person";


/*const lsz: Person = {name: "Shaozhe", hairColor: "black"}
const shaozhe: Person = {name: "Shaozhe Li", hairColor: "blue"}

const {name, hairColor} = lsz
console.log(name);*/


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