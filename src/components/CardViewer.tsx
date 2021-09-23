import { Col } from "react-bootstrap";
import { Card } from "../interface/card";

export function CardViewer({card}: {card: Card}) : JSX.Element{
    return <Col>
    <h1>Card Viewer </h1>
    <div>Card Question {card.question}</div>
    <div>Suggested Answer: {card.answer}</div>
    </Col>
}