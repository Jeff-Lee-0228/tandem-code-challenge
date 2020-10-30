// this function grades user's submission
export default function grades(submittedAnswer, correctAnswers) {
  const answers = Object.values(submittedAnswer);
  let count = 0;
  for (let i = 0; i < answers.length; i++) {
    if (correctAnswers.includes(answers[i])) {
      count += 1;
    }
  }
  return count;
}
