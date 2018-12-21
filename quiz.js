let quizDataList = [];
let currentQuizIndex = 0;

class Quiz {
  constructor(_quizData) {
    this.quiz = _quizData;
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
  .then(quizDatas => {
    quizDatas.forEach(quizData => {
      quizDataList.push(new Quiz(quizData));
    });

    console.log("クイズデータ一覧 : ", quizDatas);
    quizDataList.forEach((quizData, value) => {
        console.log("クイズ", value+1, " : ", quizData);
    });
  });
