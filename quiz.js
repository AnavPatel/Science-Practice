const myQuestions = [
	{
	  question: "What is matter?",
	  answers: {
		a: "Matter is anything that has mass.",
		b: "Matter is anything that has mass and takes up space.",
		c: "Matter is the solute in a souloution."
	  },
	  correctAnswer: "b"
	},
	{
	  question: "What is a pure substance.",
	  answers: {
		a: "A Substance that consists of only one kind of particle.",
		b: "Canada",
		c: "Not distilled water"
	  },
	  correctAnswer: "a"
	},
	{
	  question: "Select the true fact.",
	  answers: {
		a: "Mixtures are substances made up of 3 or more types of particles.",
		b: "The universal solvent is oil.",
		c: "Solubility is how well something can dissolve into the given solvent."
	  },
	  correctAnswer: "c"
	},
	{
		question: "What are the 3 states of matter?",
		answers: {
		  a: "Liquid, Solid and gas",
		  b: "Euro,Dollar,Paris",
		  c: "water,ice and vapor"
		},
		correctAnswer: "a"
	  },
	  {
		question: "What is a Solute?",
		answers: {
		  a: "A solute is the matter that gets dissolved into the universal solvent.",
		  b: "A solute is the larger quantity of a mixture.",
		  c: "A solute is usally in the smaller quantity of a mixture and can be in any state of matter."
		},
		correctAnswer: "c"
	  },
	  {
		question: "What is a saturated solution?",
		answers: {
		  a: "A solution that has a large amount of solute in the given solvent",
		  b: "A solution that contains the largest amount of solute possible",
		  c: "A solution that has dissolved more solute then what is considered saturated"
		},
		correctAnswer: "b"
	  },
	  {
		question: "Which option is an example of sorting?",
		answers: {
		  a: "Separating a mechanical mixture based on size and letting the smaller bits pass through.",
		  b: "Seperating a group of objects based on colour.",
		  c: "Using a process that removes solids from liquids and bigger particles form smaller"
		},
		correctAnswer: "b"
	  },
	  {
		question: "What is Paper Chromotography?",
		answers: {
		  a: "Seperating a souloution based on water solubility and analyzing the solute.",
		  b: "The process of evaporating the solvent from the solution and then condensing the solvent back to liquid state",
		  c: "A technique in which we use a magnet to separate different types of metal."
		},
		correctAnswer: "a"
	  },
	
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
   