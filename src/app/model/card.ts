export class Card {

    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
    answers: string[] = [];
    answered: boolean = false;
    answeredIndex: number = -1;

    constructor(item: any) {
        this.category = item.category;
        this.type = item.type;
        this.difficulty = item.difficulty;
        this.question = item.question;
        this.correct_answer = item.correct_answer;
        this.incorrect_answers = item.incorrect_answers;
        for (const ans of this.incorrect_answers) {
            this.answers.push(ans);
        }
        this.answers.push(this.correct_answer);
    }
}
