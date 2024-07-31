import { useState } from "react";

function getDateString(dateObj: Date): string {
  const year: string = dateObj.getFullYear().toString(); // year
  const month: string = `${dateObj.getMonth() + 1}`.padStart(2, "0"); // month
  const date: string = `${dateObj.getDate()}`.padStart(2, "0"); // date
  return `${year}-${month}-${date}`; // yyyy-MM-dd
}

/**
 * 오늘 날짜를 yyyy-MM-dd 형식 문자열로 리턴
 */
function getToday(): string {
  const dateObj: Date = new Date(); // Date Object for today
  return getDateString(dateObj);
}

// App
function App() {
  // const [] = useState();

  const dateObj = new Date();
  const currentYear = dateObj.getFullYear();

  return (
    <>
      <h1>복습 주기 계산기</h1>
      <label htmlFor="learningDate">학습 날짜: </label>
      <input
        type="date"
        id="learningDate"
        // value={today}
        // onChange={(e) => setToday(e.target.value)}
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
