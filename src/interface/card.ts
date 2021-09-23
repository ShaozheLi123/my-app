//export type CardKind = 'Fun Quiz' | 'Easy Guess' | 'Hard Guess';

export enum CardKind{
    FunQuiz = "Fun Quiz",
    EasyGuess = "Easy Guess",
    HardGuess = "Hard Guess"
}

export interface Card{
    Number: number;
    Kind: CardKind;
    Question: string;
    Answer: string;
}