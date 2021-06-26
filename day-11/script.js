const quizData = [
  {
    question: 'What is the fifth planet from the sun?',
    a: 'venus',
    b: 'Jupiter',
    c: 'Earth',
    d: 'Mars',
    correct: 'b',
  },
  {
    question: 'In space, the ‘Big Bang Machine’ is another name for what?',
    a: 'Commet',
    b: 'Big-bang theory',
    c: 'Intersteller',
    d: 'The Large Hadron Collider',
    correct: 'd',
  },
  {
    question:
      'Phobos and Diemos are the moons of which planet in our solar system?',
    a: 'Venus',
    b: 'Earth',
    c: 'Saturn',
    d: 'Mars',
    correct: 'd',
  },
  {
    question: 'Which is the second planet from the sun?',
    a: 'Venus',
    b: 'Earth',
    c: 'Saturn',
    d: 'Mars',
    correct: 'b',
  },
];
const anim = document.querySelector('animate');
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuestion = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuestion];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach(answerEl => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuestion].correct) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <button style="width:80%" onclick ="location.reload()">Reload</button>`;
    }
  }
});
