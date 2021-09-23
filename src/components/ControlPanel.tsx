import {Button, Col} from "react-bootstrap";
import { Card } from "../interface/card";
import CARDS from '../assets/cards.json';
import { getRandomElement } from "../utilities/data";
import { UserList } from "./UserList";
import { useState } from "react";
import { Task as User} from "editable-dnd-list";



export function ControlPanel({setCard, reveal, answerRevealed}: 
    {setCard: (c: Card)=>void, reveal: (r:boolean)=>void, answerRevealed: boolean}) : JSX.Element{
        const [users, setUsers] = useState<Task[]>([
            {id: '1', text: "Shaozhe"},
            {id: '2', text: "Kaiser"},
            {id: '3', text: "Joe"},
        ]);
        
    function setRandomCard(){
        reveal(false);
        setCard(getRandomElement(CARDS as Card[]))
    }
    
    function shuffleUsers() {
        let shuffledUsers: User[] = shuffle(users);
        setUsers([...shuffledUsers]);
    }

    return <Col>
    <h1>Control Panel </h1>
    <UserList users={users} setUsers={setUsers}></UserList>
    <Button onClick = {setRandomCard} className = "m-4">Swap Your Card</Button> 
    <Button onClick = {() => reveal(!answerRevealed)} className = "m-4"> Reveal Answer</Button>
    <Button onClick={shuffleUsers} className="m-4">Shuffle Users</Button>

    </Col>
}