let quizDataList;
let currentQuizIndex = 0;

class Quiz {
  constructor(_currentQuizData) {
    this.question = _currentQuizData.question;
    this.answers = _currentQuizData.answers;
    this.correctAnswer = _currentQuizData.correctAnswer;
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
  .then(data => {
    quizDataList = data;

    const currentQuizData = quizDataList[currentQuizIndex];
    const currentQuizAnswers = currentQuizData.incorrect_answers.slice();
    currentQuizAnswers.push(currentQuizData.correct_answer);

    const quiz = new Quiz({
      question: currentQuizData.question,
      answers: currentQuizAnswers,
      correctAnswer: currentQuizData.correct_answer
    });

    console.log("クイズデータ : ", quizDataList);
    console.log("問題文 : ", quiz.question);
    console.log("解答一覧 : ", quiz.answers);
    console.log("正解 : ", quiz.correctAnswer);
  });
