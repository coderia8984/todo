import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [cardContext, setCardContext] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      context: "리액트 기초를 공부해봅시다",
    },
    {
      id: 2,
      title: "리액트 공부하기",
      context: "리액트 기초를 공부해봅시다",
    },
    {
      id: 3,
      title: "리액트 공부하기",
      context: "리액트 기초를 공부해봅시다",
    },
  ]);

  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const contextChangeHandler = (event) => {
    setContext(event.target.value);
  };

  const addButtonHandler = () => {
    const newCard = {
      id: cardContext.length + 1,
      title,
      context,
    };
    setCardContext([...cardContext, { newCard }]);
  };

  return (
    <div>
      <div className='mainLayout'>
        <div className='topBox'>
          <div>My Todo List</div>
          <div>React</div>
        </div>
        <form className='addForm'>
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
              {cardContext.map(function (item) {
                return (
                  <div key={item.id} className='todoBox'>
                    {item.title}-{item.context}
                    <div className='listBtns'>
                      <button className='deleteBtn'>삭제하기</button>
                      <button className='completeBtn'>완료</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <h2 className='listTitle'>Done..! 🎉</h2>
          <div className='wrapper'>
            <div className='todoBox'>
              <div>
                <h2></h2>
                <p></p>
              </div>
              <div className='listBtns'>
                <button className='deleteBtn'>삭제하기</button>
                <button className='completeBtn'>완료</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
