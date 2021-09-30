import { useState } from "react";
import "react-bootstrap";
import { Form } from "react-bootstrap";
import { ControlPanel } from '../components/ControlPanel';

export function TypeInAnswer ({typeinanswer, settypeinanswer, checkAnswer}: 
    {typeinanswer: string, settypeinanswer: (t: string)=> void, 
    checkAnswer: () => void}) : JSX.Element {
    const [answer, setAnswer] = useState<string>("ANSWER TEXT");
    

    return <div>
    <div className="input-group mb-3">
    <button className="btn btn-outline-secondary" type="button" id="button-addon1" onClick={checkAnswer}>Check Answer</button>
    <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"></input>
    </div>

    <Form>
        <Form.Group className="mb-3" controlId="addCardForm.answerTextArea">
          <Form.Label>Answer</Form.Label>
          <Form.Control as="textarea" rows={3}
            value={answer}
            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setAnswer(ev.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="addCardForm.answerTextArea">
          <Form.Label>Your TypeInAnswer</Form.Label>
          <Form.Control as="textarea" rows={3} 
            value={typeinanswer}
            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => settypeinanswer(ev.target.value)}/>
        </Form.Group>
      </Form>
</div>
}

