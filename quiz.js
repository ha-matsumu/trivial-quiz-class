const divCurrentQuizQuestion = document.getElementById("currentQuizQuestion");
const ulCurrentQuizAnswers = document.getElementById("currentQuizAnswers");
const divNumberOfCorrectAnswers = document.getElementById(
  "numberOfCorrectAnswers"
);
const quizInstances = [];
let currentQuizIndex = 0;
let numberOfCorrectAnswers = 0;

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

    appendCurrentQuizToContainer(quizInstances[currentQuizIndex]);
  });

function appendCurrentQuizToContainer(_currentQuizInstance) {
  const currentQuestionText = `Q${currentQuizIndex + 1}. ${
    _currentQuizInstance.question
  }`;
  const shuffledAnswers = _currentQuizInstance.getShuffledAnswers();

  divCurrentQuizQuestion.textContent = currentQuestionText;

  while (ulCurrentQuizAnswers.firstChild) {
    ulCurrentQuizAnswers.removeChild(ulCurrentQuizAnswers.firstChild);
  }

  shuffledAnswers.forEach(shuffledAnswer => {
    const liCurrentQuizAnswer = document.createElement("li");
    liCurrentQuizAnswer.textContent = shuffledAnswer;

    liCurrentQuizAnswer.addEventListener("click", () => {
      currentQuizIndex++;
      if (currentQuizIndex === quizInstances.length) {
        const resultText = `Your Score<br>${numberOfCorrectAnswers} / ${
          quizInstances.length
        }`;
        divNumberOfCorrectAnswers.innerHTML = resultText;
      } else {
        if (liCurrentQuizAnswer.textContent === _currentQuizInstance.correctAnswer) {
          numberOfCorrectAnswers++;
          alert("You got it right!!");
        } else {
          alert(
            `You got it wrong. The answer of this question is "${
                _currentQuizInstance.correctAnswer
            }".`
          );
        }
        appendCurrentQuizToContainer(quizInstances[currentQuizIndex]);
      }
    });

    ulCurrentQuizAnswers.appendChild(liCurrentQuizAnswer);
  });
}
