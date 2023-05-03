const WorkingBox = ({ item, deleteFunction, isDoneChangeHandler }) => {
  return (
    <div key={item.id} className='todoBox'>
      <h2 className='todoTitle'>{item.title}</h2>
      <p>{item.context}</p>

      <div className='listBtns'>
        <button className='deleteBtn' onClick={() => deleteFunction(item.id)}>
          삭제하기
        </button>
        <button className='completeBtn' onClick={() => isDoneChangeHandler(item.id)}>
          완료
        </button>
      </div>
    </div>
  );
};

export default WorkingBox;
