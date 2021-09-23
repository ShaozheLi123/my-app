import { Col,  Card as BootstrapCard } from "react-bootstrap";
import { Card } from "../interface/card";

export function CardViewer({card, answerRevealed}: {card: Card, answerRevealed: boolean}) : JSX.Element{
    return <Col>
    <BootstrapCard>
        <BootstrapCard.Body>
            <BootstrapCard.Title>Card Viewer</BootstrapCard.Title>
        <BootstrapCard.Text>
            <strong>Card Question:</strong> {card.question}
        </BootstrapCard.Text>
        {answerRevealed && <BootstrapCard.Text>
            <strong>Suggested Answer:</strong> {card.answer}
        </BootstrapCard.Text>}
        </BootstrapCard.Body>
    </BootstrapCard>
    </Col>
}