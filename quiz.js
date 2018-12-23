const quizInstances = [];
let currentQuizIndex = 0;

class Quiz {
  constructor(_quizData) {
    this.category = _quizData.category;
    this.correctAnswer = _quizData.correct_answer;
    this.difficulty = _quizData.difficulty;
    this.incorrectAnswers = _quizData.incorrect_answers;
    this.question = _quizData.question;
    this.type = _quizData.type;
  }

  // 以下に解答一覧をシャッフルする機能の実装
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

fetch("https://opentdb.com/api.php?amount=10")
  .then(response => {
    return response.json();
  })
  .then(response => {
    return response.results;
  })
  .then(quizDataList => {
    quizDataList.forEach(quizData => {
      quizInstances.push(new Quiz(quizData));
    });

    // TODO:あとで消す
    console.log("クイズデータ一覧 : ", quizInstances);
    quizInstances.forEach((quizInstance, value) => {
      console.log("----QUIZ No.", value + 1, "----");
      console.log("category", quizInstance.category);
      console.log("correct_answer : ", quizInstance.correctAnswer);
      console.log("difficulty: ", quizInstance.difficulty);
      console.log("incorrect_answers : ", quizInstance.incorrectAnswers);
      console.log("question : ", quizInstance.question);
      console.log("type : ", quizInstance.type);
      console.log("shuffled_answers : ", quizInstance.getShuffledAnswers());
    });
  });
