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
    quizInstances.forEach((quizData, value) => {
      console.log("----QUIZ.", value + 1, "----");
      console.log("category", quizData.category);
      console.log("correct_answer : ", quizData.correctAnswer);
      console.log("difficulty: ", quizData.difficulty);
      console.log("incorrect_answers : ", quizData.incorrectAnswers);
      console.log("question : ", quizData.question);
      console.log("type : ", quizData.type);
    });
  });
