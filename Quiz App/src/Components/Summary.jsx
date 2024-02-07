import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../data/questions.js";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );
  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongAnswersShare = 100 - correctAnswersShare - skippedAnswersShare;
  console.log(correctAnswers.length / userAnswers.length);
  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Quiz Complete Img" />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}</span>
          <span className="text">Answred Correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}</span>
          <span className="text">Unanswred Correctly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={QUESTIONS[index].id}>
              <h3>{index + 1}</h3>
              <p className="question"> {QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
