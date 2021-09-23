import {Button, Col} from "react-bootstrap";
import { Card } from "../interface/card";


export function ControlPanel({setCard}: {setCard: (c: Card)=>void}) : JSX.Element{
    return <Col>
    <h1>Control Panel </h1>
    <Button>Swap Card</Button> 
    </Col>
}