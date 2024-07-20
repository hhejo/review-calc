import { useState } from "react";

function getToday() {
  const dateObj = new Date();
  const year = dateObj.getFullYear().toString();
  const month = `${dateObj.getMonth() + 1}`.padStart(2, "0");
  const date = `${dateObj.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${date}`;
}

function App() {
  const [learningDate, setLearningDate] = useState(getToday);
  const [reviewDates, setReviewDates] = useState({});

  const calculateReviewDates = () => {
    if (!learningDate) {
      alert("학습 날짜를 입력하세요");
      return;
    }
    const date = new Date(learningDate);
    const firstReview = new Date(date);
    firstReview.setDate(date.getDate() + 1);
    const secondReview = new Date(date);
    secondReview.setDate(date.getDate() + 8);
    const thirdReview = new Date(date);
    thirdReview.setDate(date.getDate() + 15);
    const fourthReview = new Date(date);
    fourthReview.setMonth(date.getMonth() + 1);
    setReviewDates({
      "학습 날짜": date.toISOString().split("T")[0],
      "1회차 복습": firstReview.toISOString().split("T")[0],
      "2회차 복습": secondReview.toISOString().split("T")[0],
      "3회차 복습": thirdReview.toISOString().split("T")[0],
      "4회차 복습": fourthReview.toISOString().split("T")[0],
    });
  };

  return (
    <>
      <h1>복습 주기 계산기</h1>
      <label htmlFor="learningDate">학습 날짜: </label>
      <input
        type="date"
        id="learningDate"
        value={learningDate}
        onChange={(e) => setLearningDate(e.target.value)}
      />
      <button onClick={calculateReviewDates}>계산</button>

      <h2>복습 날짜: </h2>
      <ul>
        {Object.entries(reviewDates).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
