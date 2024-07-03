import { useState } from "react";
import "./App.css";

function App() {
  const [learningDate, setLearningDate] = useState("");
  const [reviewDates, setReviewDates] = useState({});

  const calculateReviewDates = () => {
    if (!learningDate) {
      alert("학습 날짜를 입력하세요");
      return;
    }
    const learningDateObj = new Date(learningDate);
    const firstReview = new Date(learningDateObj);
    firstReview.setDate(learningDateObj.getDate() + 1);
    const secondReview = new Date(learningDateObj);
    secondReview.setDate(learningDateObj.getDate() + 8);
    const thirdReview = new Date(learningDateObj);
    thirdReview.setDate(learningDateObj.getDate() + 15);
    const fourthReview = new Date(learningDateObj);
    fourthReview.setMonth(learningDateObj.getMonth() + 1);
    setReviewDates({
      "학습 날짜": learningDateObj.toISOString().split("T")[0],
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
