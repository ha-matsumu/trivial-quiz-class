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
  .then(datas => {
    datas.forEach(data => {
      quizDataList.push(new Quiz(data));
    });

    quizDataList.forEach((quizData, value) => {
        console.log("クイズ", value+1, " : ", quizData);
    });
  });
