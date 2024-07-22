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
  const [reviewDates, setReviewDates] = useState({});

  const calculateReviewDates = () => {
    if (!learningDate) {
      alert("학습 날짜를 입력하세요");
      return;
    }

    const date: Date = new Date(learningDate);
    const firstReview: Date = new Date(date);
    firstReview.setDate(date.getDate() + 1);
    const secondReview: Date = new Date(date);
    secondReview.setDate(date.getDate() + 8);
    const thirdReview: Date = new Date(date);
    thirdReview.setDate(date.getDate() + 15);
    const fourthReview: Date = new Date(date);
    fourthReview.setMonth(date.getMonth() + 1);

    setReviewDates({
      "학습 날짜": date.toISOString().split("T")[0],
      "1회차 복습": firstReview.toISOString().split("T")[0],
      "2회차 복습": secondReview.toISOString().split("T")[0],
      "3회차 복습": thirdReview.toISOString().split("T")[0],
      "4회차 복습": fourthReview.toISOString().split("T")[0],
    });

    console.log(reviewDates);
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

      <div>
        <div className="flex">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
        </div>
        <div className="flex">
          <div>11</div>
          <div>12</div>
          <div>13</div>
          <div>14</div>
          <div>15</div>
          <div>16</div>
          <div>17</div>
          <div>18</div>
          <div>19</div>
          <div>20</div>
        </div>
        <div className="flex">
          <div>21</div>
          <div>22</div>
          <div>23</div>
          <div>24</div>
          <div>25</div>
          <div>26</div>
          <div>27</div>
          <div>28</div>
          <div>29</div>
          <div>30</div>
        </div>
        <div className="flex">
          <div>31</div>
        </div>
      </div>
    </>
  );
}

export default App;
