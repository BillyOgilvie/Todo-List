import './Input.css';

const Input = (props) => {
  const { addItem, getInput, input } = props;

  const onChangeHandler = (e) => {
    getInput(e.target.value);
  };

  return (
    <>
      <input
        className="inputComponent"
        onChange={onChangeHandler}
        value={input}
      ></input>
      <button className="addButton inputComponent" onClick={addItem}>
        Add Item
      </button>
    </>
  );
};

export default Input;
