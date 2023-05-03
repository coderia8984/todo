import React, { useState } from "react";
import "./App.css";

const App = () => {
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
            <input type='text' className='input' />
            <label className='formLabel'>내용</label>
            <input type='text' className='input' />
            <button className='addBtn'>추가하기</button>
          </div>
        </form>
        <div className='listBox'>
          <h2 className='listTitle'>Working.. 🔥</h2>
          <div className='wrapper'>
            <div className='todoBox'>
              <div>
                <h2 className='todoTitle'>리액트 공부하기</h2>
                <p>리액트 기초를 공부해봅시다</p>
              </div>
              <div className='listBtns'>
                <button className='deleteBtn'>삭제하기</button>
                <button className='completeBtn'>완료</button>
              </div>
            </div>
          </div>
          <h2 className='listTitle'>Done..! 🎉</h2>
          <div className='wrapper'>
            <div className='todoBox'>
              <div>
                <h2 className='todoTitle'>리액트 공부하기</h2>
                <p>리액트 기초를 공부해봅시다</p>
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
