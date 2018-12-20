let quizDataList;
let currentQuizIndex = 0;

class Quiz {
    constructor(_quizDataList, _currentQuizIndex) {
        this.quiz = _quizDataList[_currentQuizIndex];
        this.question = this.quiz.question;

        this.answers = this.quiz.incorrect_answers.slice();
        this.answers.push(this.quiz.correct_answer);
        
        this.correctAnswer = this.quiz.correct_answer;
    }

    // 解答一覧をシャッフルする機能
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

        console.log("クイズデータ : ", quizDataList);
        const quiz = new Quiz(quizDataList, currentQuizIndex);
        console.log("問題文 : ", quiz.question);
        console.log("解答一覧 : ", quiz.answers);
        console.log("正解 : ", quiz.correctAnswer);

        // appendCurrentQuizToContainer関数の実行
    });  

// appendCurrentQuizToContainer関数の定義

