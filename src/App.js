import React, { useState } from "react";
import "./App.css";
import WorkingBox from "./components/WorkingBox";
import DoneBox from "./components/DoneBox";

const App = () => {
  const date = Date.now();
  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");

  const [cardContext, setCardContext] = useState([
    {
      id: date + "" + Math.floor(Math.random() * 100),
      title: "항해 리액트 1주차",
      context: "과제 제출하기",
      isDone: 0,
    },
    {
      id: date + "" + Math.floor(Math.random() * 100),
      title: "항해 듣기",
      context: "Lv1 과제 끝내기",
      isDone: 1,
    },
  ]);

  // 현재 시간

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const contextChangeHandler = (event) => {
    setContext(event.target.value);
  };

  //추가하기 버튼 클릭
  const addButtonHandler = (e) => {
    e.preventDefault();

    const date = Date.now();

    //새로운 todo 객체 생성
    const newCard = {
      id: date + "" + Math.floor(Math.random() * 100),
      title,
      context,
      isDone: 0,
    };

    //객체넣기
    setCardContext([...cardContext, newCard]);

    //초기화
    setTitle("");
    setContext("");
  };

  //삭제하기 버튼 클릭
  const clickDeleteButtonHandler = (id) => {
    const newCard = cardContext.filter((card) => card.id !== id);

    setCardContext(newCard);
  };

  //상태변환버튼
  const isDoneChangeHandler = (id) => {
    const newCard = cardContext.map((card) => (card.id === id ? { ...card, isDone: Number(!card.isDone) } : card));

    setCardContext(newCard);
  };

  return (
    <div>
      <div className='mainLayout'>
        <div className='topBox'>
          <div>My Todo List</div>
          <div>React</div>
        </div>
        <form className='addForm' onSubmit={addButtonHandler}>
          <div className='inputGroup'>
            <label className='formLabel'>제목</label>
            <input type='text' className='input' value={title} onChange={titleChangeHandler} />
            <label className='formLabel'>내용</label>
            <input type='text' className='input' value={context} onChange={contextChangeHandler} />
            <button className='addBtn' onClick={addButtonHandler}>
              추가하기
            </button>
          </div>
        </form>
        <div className='listBox'>
          <h2 className='listTitle'>Working.. 🔥</h2>
          <div>
            <div className='wrapper'>
              {cardContext
                .filter((item) => {
                  return item.isDone === 0;
                })
                .map((item) => {
                  return <WorkingBox key={item.id} item={item} deleteFunction={clickDeleteButtonHandler} isDoneChangeHandler={isDoneChangeHandler} />;
                })}
            </div>
          </div>

          <h2 className='listTitle'>Done..! 🎉</h2>
          <div className='wrapper'>
            {cardContext
              .filter((item) => {
                return item.isDone === 1;
              })
              .map((item) => {
                return <DoneBox key={item.id} item={item} deleteFunction={clickDeleteButtonHandler} isDoneChangeHandler={isDoneChangeHandler} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
