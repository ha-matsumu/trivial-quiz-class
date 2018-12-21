let quizDataList = [];
let currentQuizIndex = 0;

class Quiz {
  constructor(_quizInstance) {
    this.question = _quizInstance.question;
    this.correctAnswer = _quizInstance.correct_answer;
    this.incorrectAnswers = _quizInstance.incorrect_answers;
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
  .then(quizInstances => {
    quizInstances.forEach(quizInstance => {
      quizDataList.push(new Quiz(quizInstance));
    });

    console.log("クイズデータ一覧 : ", quizInstances);
    quizDataList.forEach((quizInstance, value) => {
      console.log("クイズ", value + 1, "問題 : ", quizInstance.question);
      console.log("クイズ", value + 1, "正解 : ", quizInstance.correctAnswer);
      console.log("クイズ", value + 1, "不正解 : ", quizInstance.incorrectAnswers);
    });
  });
