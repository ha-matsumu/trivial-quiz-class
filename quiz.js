class Quiz {
  constructor(_quizData) {
    this.category = _quizData.category;
    this.correctAnswer = _quizData.correct_answer;
    this.difficulty = _quizData.difficulty;
    this.incorrectAnswers = _quizData.incorrect_answers;
    this.question = _quizData.question;
    this.type = _quizData.type;
  }

  getShuffledAnswers() {
    const answers = this.incorrectAnswers.slice();
    answers.push(this.correctAnswer);

    for (let i = 0; i < answers.length; i++) {
      const random = Math.floor(Math.random() * (i + 1));

      const tmp = answers[i];
      answers[i] = answers[random];
      answers[random] = tmp;
    }

    return answers;
  }
}