import { useState } from "react";

// nextjs
// zustand
// test-library

/**
 * 오늘 날짜를 yyyy-MM-dd 형식 문자열로 리턴
 */
function getToday(): string {
  const dateObj: Date = new Date(); // Date Object for today
  const year: string = dateObj.getFullYear().toString(); // year
  const month: string = `${dateObj.getMonth() + 1}`.padStart(2, "0"); // month
  const date: string = `${dateObj.getDate()}`.padStart(2, "0"); // date
  return `${year}-${month}-${date}`; // yyyy-MM-dd
}

// App
function App() {
  const [learningDate, setLearningDate] = useState(getToday);
  // const [reviewDates, setReviewDates] = useState({});

  const originDateObj = new Date();
  const year = originDateObj.getFullYear();
  const month = originDateObj.getMonth();

  const dateObj = new Date(year, month, 1);
  const firstDay = dateObj.getDay();
  console.log("firstDay:", firstDay);

  const currentMonth = dateObj.getMonth();
  let acc = 1;
  while (currentMonth === dateObj.getMonth()) {
    console.log(`dateObj.getMonth(): ${dateObj.getMonth()}`);
    dateObj.setDate(acc);
    acc += 1;
    console.log(dateObj.getDay());
    console.log(
      `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}-${dateObj.getDate()}`
    );
  }

  // const calculateReviewDates = () => {
  //   if (!learningDate) {
  //     alert("학습 날짜를 입력하세요");
  //     return;
  //   }

  //   const date: Date = new Date(learningDate);
  //   const firstReview: Date = new Date(date);
  //   firstReview.setDate(date.getDate() + 1);
  //   const secondReview: Date = new Date(date);
  //   secondReview.setDate(date.getDate() + 8);
  //   const thirdReview: Date = new Date(date);
  //   thirdReview.setDate(date.getDate() + 15);
  //   const fourthReview: Date = new Date(date);
  //   fourthReview.setMonth(date.getMonth() + 1);

  //   setReviewDates({
  //     "학습 날짜": date.toISOString().split("T")[0],
  //     "1회차 복습": firstReview.toISOString().split("T")[0],
  //     "2회차 복습": secondReview.toISOString().split("T")[0],
  //     "3회차 복습": thirdReview.toISOString().split("T")[0],
  //     "4회차 복습": fourthReview.toISOString().split("T")[0],
  //   });

  //   console.log(reviewDates);
  // };

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
      {/* <button onClick={calculateReviewDates}>계산</button> */}

      <h2>복습 날짜: </h2>

      {/* 달력 */}
      <div className="grid grid-cols-7 text-center">
        <div>일</div>
        <div>월</div>
        <div>화</div>
        <div>수</div>
        <div>목</div>
        <div>금</div>
        <div>토</div>
      </div>
    </>
  );
}

export default App;
