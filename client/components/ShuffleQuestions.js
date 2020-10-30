// this function shuffles 10 questions for a round
export default function shuffleQuestion(array) {
  //filter questions with four options
  const questions = array.filter((el) => el.incorrect.length === 3);
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = questions[i];
    questions[i] = questions[j];
    questions[j] = temp;
  }
  //return first 10 questions
  return questions.slice(0, 10);
}
