const myQuestions = [
	{
	  question: "What is the capital of France?",
	  answers: {
		a: "London",
		b: "Paris",
		c: "Berlin"
	  },
	  correctAnswer: "b"
	}
  ];
  
  function buildQuiz() {
	const output = [];
  
	myQuestions.forEach((currentQuestion, questionNumber) => {
	  const answers = [];
  
	  for (letter in currentQuestion.answers) {
		answers.push(
		  `<label>
			<input type="radio" name="question${questionNumber}" value="${letter}">
			${letter}: ${currentQuestion.answers[letter]}
		  </label>`
		);
	  }
  
	  output.push(
		`<div class="question">
		  <h3>${currentQuestion.question}</h3>
		  <div class="answers">${answers.join("")}</div>
		</div>`
	  );
	});
  
	quizContainer.innerHTML = output.join("");
  }
  
  function showResults() {
	const answerContainers = quizContainer.querySelectorAll(".answers");
  
	let numCorrect = 0;
  
	myQuestions.forEach((currentQuestion, questionNumber) => {
	  const answerContainer = answerContainers[questionNumber];
	  const selector = `input[name=question${questionNumber}]:checked`;
	  const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
	  if (userAnswer === currentQuestion.correctAnswer) {
		numCorrect++;
  
		answerContainers[questionNumber].style.color = "green";
	  } else {
		answerContainers[questionNumber].style.color = "red";
	  }
	});
  
	resultsContainer.innerHTML = `You got ${numCorrect} out of ${myQuestions.length} questions correct.`;
  }
  
  function resetQuiz() {
	const answerContainers = quizContainer.querySelectorAll(".answers");
  
	myQuestions.forEach((currentQuestion, questionNumber) => {
	  const answerContainer = answerContainers[questionNumber];
  
	  answerContainer.style.color = "";
	  answerContainer.querySelectorAll("input").forEach(input => {
		input.checked = false;
	  });
	});
  
	resultsContainer.innerHTML = "";
  }
  
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("score");
  const submitButton = document.getElementById("submit");
  const resetButton = document.getElementById("reset");
  
  buildQuiz();
  
  submitButton.addEventListener("click", showResults);
  resetButton.addEventListener("click", resetQuiz);
   