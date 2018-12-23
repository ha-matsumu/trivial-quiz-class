const divCurrentQuizQuestion = document.getElementById("currentQuizQuestion");
const ulCurrentQuizAnswers = document.getElementById("currentQuizAnswers");
const divNumberOfCorrectAnswers = document.getElementById(
  "numberOfCorrectAnswers"
);
const quizInstances = [];
let currentQuizIndex = 0;
let numberOfCorrectAnswers = 0;

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
        finishQuiz(quizInstances);
      } else {
        checkAnswer(
          liCurrentQuizAnswer.textContent,
          _currentQuizInstance.correctAnswer
        );
        appendCurrentQuizToContainer(quizInstances[currentQuizIndex]);
      }
    });

    ulCurrentQuizAnswers.appendChild(liCurrentQuizAnswer);
  });
}

function finishQuiz() {
  const resultText = `Your Score<br>${numberOfCorrectAnswers} / ${
    quizInstances.length
  }`;
  divCurrentQuizQuestion.textContent = "";
  divNumberOfCorrectAnswers.innerHTML = resultText;
  while (ulCurrentQuizAnswers.firstChild) {
    ulCurrentQuizAnswers.removeChild(ulCurrentQuizAnswers.firstChild);
  }
}

function checkAnswer(_clickedAnswer, _correctAnswer) {
  if (_clickedAnswer === _correctAnswer) {
    numberOfCorrectAnswers++;
    alert("You got it right!!");
  } else {
    alert(
      `You got it wrong. The answer of this question is "${_correctAnswer}".`
    );
  }
}
