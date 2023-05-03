const DoneBox = ({ item, deleteFunction, isDoneChangeHandler }) => {
  return (
    <div key={item.id} className='todoBox'>
      <h2 className='todoTitle'>{item.title}</h2>
      <p>{item.context}</p>

      <div className='listBtns'>
        <button className='deleteBtn' onClick={() => deleteFunction(item.id)}>
          삭제하기
        </button>
        <button className='cancleBtn' onClick={() => isDoneChangeHandler(item.id)}>
          취소
        </button>
      </div>
    </div>
  );
};

export default DoneBox;
