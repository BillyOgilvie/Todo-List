import "./ListItem.css";

const ListItem = (props) => {
  const {
    item: { key, title, isComplete },
    onCompleted,
    className,
  } = props;

  const handleClick = () => {
    onCompleted(key);
  };

  return (
    <div>
      <button onClick={handleClick} className={className}>
        {`${isComplete ? "✅" : "⬜ "}`}
        <span
          className={
            isComplete
              ? `${className} todospan complete`
              : `${className} todospan`
          }
        >
          {title}
        </span>
      </button>
    </div>
  );
};

export default ListItem;
