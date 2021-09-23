import {Button, Col} from "react-bootstrap";
import { Card } from "../interface/card";
import CARDS from '../assets/cards.json';
import { getRandomElement } from "../utilities/data";


export function ControlPanel({setCard}: {setCard: (c: Card)=>void}) : JSX.Element{
    function setRandomCard(){
        setCard(getRandomElement(CARDS as Card[]))
    }

    return <Col>
    <h1>Control Panel </h1>
    <Button onClick = {setRandomCard}>Swap Card</Button> 
    </Col>
}