import "./List.css";
import ListItem from "./ListItem/ListItem";

const List = (props) => {
  const { listItems, onCompleted } = props;

  return (
    <div>
      {listItems.map((item) => (
        <ListItem
          item={item}
          key={item.key}
          isComplete={item.isComplete}
          onCompleted={onCompleted}
          className={"ListItem"}
        />
      ))}
    </div>
  );
};

export default List;
