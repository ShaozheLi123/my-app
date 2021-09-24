import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Card } from '../interface/card'

export function AddCardModal({visible, setVisible, addCard}: 
  {visible: boolean, setVisible: (b: boolean)=>void,
  addCard: (c: Card) => void}): JSX.Element {
    const [question, setQuestion] = useState<string>("QUESTION TEXT");
    const [answer, setAnswer] = useState<string>("ANSWER TEXT");

    function saveCard() {
      addCard({
        number: Math.random(),
        kind: "Custom",
        question, answer
      });
      setVisible(false);
    }

    const hide = () => setVisible(false);
    return (
    <Modal show={visible} onHide={hide}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Card</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="addCardForm.questionTextArea">
          <Form.Label>Question</Form.Label>
          <Form.Control as="textarea" rows={3}
            value={question}
            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setQuestion(ev.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="addCardForm.answerTextArea">
          <Form.Label>Suggested Answer</Form.Label>
          <Form.Control as="textarea" rows={3} 
            value={answer}
            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setAnswer(ev.target.value)}/>
        </Form.Group>
      </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={hide}>Close</Button>
        <Button variant="primary" onClick={saveCard}>Save changes</Button>
      </Modal.Footer>
    </Modal>)}