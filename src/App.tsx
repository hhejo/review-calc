import { useState } from "react";

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
  const [today, setToday] = useState(getToday);

  // 현재 연도, 월
  const currentDateObj = new Date();
  const currentYear = currentDateObj.getFullYear();
  const currentMonth = currentDateObj.getMonth();

  // const initDateObj = new Date(currentYear, currentMonth, 1);
  // const firstDay = initDateObj.getDay();

  console.log(`오늘: ${currentDateObj}`);

  let copiedDateObj = new Date(currentDateObj);
  copiedDateObj.setDate(copiedDateObj.getDate() - 7 * 7 - 1);
  console.log(`학습 당일: ${copiedDateObj}`);

  copiedDateObj = new Date(currentDateObj);
  copiedDateObj.setDate(copiedDateObj.getDate() - 7 * 7);
  console.log(`복습 1회차: ${copiedDateObj}`);

  copiedDateObj = new Date(currentDateObj);
  copiedDateObj.setDate(copiedDateObj.getDate() - 7 * 6);
  console.log(`복습 2회차: ${copiedDateObj}`);

  copiedDateObj = new Date(currentDateObj);
  copiedDateObj.setDate(copiedDateObj.getDate() - 7 * 4);
  console.log(`복습 3회차: ${copiedDateObj}`);

  copiedDateObj = new Date(currentDateObj);
  copiedDateObj.setDate(copiedDateObj.getDate());
  console.log(`복습 4회차: ${copiedDateObj}`);

  copiedDateObj = new Date(currentDateObj);
  copiedDateObj.setDate(copiedDateObj.getDate() - 7 * 7 - 1);
  copiedDateObj.setDate(copiedDateObj.getDate() - copiedDateObj.getDay());
  console.log(copiedDateObj);

  const daysArr = [];
  let acc = 0;
  while (acc < 48) {
    const obj = { 날짜: copiedDateObj };
    daysArr.push(obj);
    copiedDateObj.setDate(copiedDateObj.getDate() + 1);
    acc += 1;
  }

  console.table(daysArr);

  // dateObj.setDate(dateObj.getDate() + 1);
  // console.log(`첫 번째 복습일: ${dateObj}`);

  // const currentMonth = dateObj.getMonth();
  // console.log("currentMonth:", currentMonth);
  // let acc = 1;
  // while (currentMonth === dateObj.getMonth()) {
  //   acc += 1;
  //   dateObj.setDate(acc);
  // }

  return (
    <>
      <h1>복습 주기 계산기</h1>
      <label htmlFor="learningDate">학습 날짜: </label>
      <input
        type="date"
        id="learningDate"
        value={today}
        onChange={(e) => setToday(e.target.value)}
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
