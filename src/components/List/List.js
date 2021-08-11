import './List.css';

const List = (props) => {
  const { listItems } = props;

  const onClickHandler = (e) => {
    // e.target.innerHTML = `✅`;
  };

  return (
    <div>
      {listItems.map((item) => (
        <div>
          <button className="todoItem" key={item.key} onClick={onClickHandler}>
            {`${item.isComplete ? '✅' : '⬜'} ${item.title}`}
          </button>
        </div>
      ))}
    </div>
  );
};

export default List;
