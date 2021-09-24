//export type CardKind = 'Fun Quiz' | 'Easy Guess' | 'Hard Guess';

/*export enum CardKind{
    FunQuiz = "Fun Quiz",
    EasyGuess = "Easy Guess",
    HardGuess = "Hard Guess"
}*/

export interface Card{
    number: number;
    kind: string;
    question: string;
    answer: string;
}