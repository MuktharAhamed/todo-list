import { IconButton } from "@material-ui/core";
import { Done, Delete } from "@material-ui/icons";
import { useEffect, useRef, useState } from "react";
import { filterObjIndexMap } from "views/todo";

const List = ({ data, filter, search, updatecompleted, deletetodo }) => {
  const [todos, setTodos] = useState(data);
  // const [temp, setTemp] = useState([]);

  const searchData = useRef();

  useEffect(() => {
    filterData();
    // subscription -> componentDidMount()

    // unsubscribe
    // return unsubscribe; // componentWillUnmount()
  }, [filter, data]);

  useEffect(() => {
    const searchtext = new RegExp(search, "i");
    const filteredTodos = searchData.current.filter(({ text }) =>
      Boolean(text.match(searchtext))
    );
    setTodos(filteredTodos);
    console.log("filteredTodos", filteredTodos);
  }, [search]);

  const filterData = () => {
    let filteredData = data;
    if (filter === filterObjIndexMap["1"]) {
      filteredData = data.filter((e) => !e.completed);
    } else if (filter === filterObjIndexMap["2"]) {
      filteredData = data.filter((e) => e.completed);
    }
    setTodos(filteredData);
    searchData.current = filteredData;
    // setTemp(filteredData);
  };

  return (
    // <>
    <div
      style={{
        maxHeight: "200px",
        overflowY: "auto",
      }}
    >
      {todos.map((e) => (
        <Divlist
          key={e.id}
          data={e}
          updatecompleted={updatecompleted}
          deletetodo={deletetodo}
        />
      ))}
    </div>
    // </>
  );
};

const Divlist = ({ data, updatecompleted, deletetodo }) => {
  const name = data.completed ? "divlistcompleted" : "divlist";
  return (
    <div className={name}>
      <p style={{ paddingLeft: "10px" }}>{data.text}</p>
      <div>
        <IconButton
          onClick={(e) => updatecompleted(data.id)}
          aria-label="done"
          size="small"
        >
          <Done />
        </IconButton>
        <IconButton
          onClick={(e) => deletetodo(data.id)}
          aria-label="delete"
          size="small"
        >
          <Delete />
        </IconButton>
      </div>
    </div>
  );
};

export default List;
