import "./App.css";
import {
  Typography,
  TextField,
  InputAdornment,
  Container,
  Box,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import List from "./components/list";
import { useState } from "react";
import Selectcontrol from "./components/Selectcontrol";
import SearchBar from "material-ui-search-bar";
export const filterObjIndexMap = {
  0: "all",
  1: "todo",
  2: "completed",
};

function App() {
  const [dataval, setdata] = useState([]);
  const [filter, setFilter] = useState("all");
  const [task, settask] = useState("");
  const [search, setSearch] = useState("");
  const todo = (e) => {
    e.preventDefault();
    var date = new Date(Date.now());
    let mm = date.getMonth();
    let dd = date.getDate();
    let yy = date.getFullYear();
    if (task.length) {
      setdata([
        ...dataval,
        {
          text: task,
          completed: false,
          id: idgenerator(), // Date.now()
          createddate: `${dd}-${mm}-${yy}`,
        },
      ]);
      settask("");
    }
  };
  const idgenerator = () => {
    let id = 0;
    let idarr;
    if (dataval.length > 0) {
      idarr = dataval.map((e) => e.id);
      id = Math.max(...idarr);
    }
    return id + 1;
  };
  const updatecompleted = (id) => {
    let dataindex;
    var updateddata = [...dataval];
    dataindex = updateddata.findIndex((e) => e.id === id);
    updateddata[dataindex].completed = !updateddata[dataindex].completed;
    setdata(updateddata);
  };
  const deletetodo = (id) => {
    var data = [...dataval];
    var deleteddata = data.filter((e) => e.id !== id);
    setdata(deleteddata);
  };
  const selecteditem = (index) => {
    console.log("filterObjIndexMap[index]", filterObjIndexMap[index]);
    setFilter(filterObjIndexMap[index]);
  };
  const setstatesearch = (value) => {
    console.log("setstatesearch", value);
    setSearch(value);
  };
  return (
    <div className="App">
      <Container className="Container" maxWidth="xs">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            <Box width="50%">
              <Typography
                variant="h4"
                component="div"
                style={{
                  color: "white",
                  marginBottom: "10px",
                  alignSelf: "center",
                }}
              >
                To Do List
              </Typography>
            </Box>
            <Box width="40%">
              <SearchBar
                onChange={setstatesearch}
                onCancelSearch={setstatesearch}
                value={search}
                height="10px"
                cancelOnEscape
              />
            </Box>
          </div>
          <div
            style={{
              // alignItems: "center",
              justifyContent: "space-evenly",
              display: "flex",
              marginBottom: 20,
            }}
          >
            {/* <Box> */}
            <form onSubmit={todo}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <TextField
                  onChange={(e) => settask(e.target.value)}
                  value={task}
                  variant="outlined"
                  label="Add New"
                  size="small"
                  // style={{ flex: "10%" }}
                  // error
                  // helperText="This is just an error message"
                ></TextField>
                <button type="submit">
                  <Add />
                </button>
              </div>
            </form>
            <div>
              <Selectcontrol selecteditem={selecteditem} />
            </div>
          </div>
          <List
            data={dataval}
            filter={filter}
            search={search}
            updatecompleted={updatecompleted}
            deletetodo={deletetodo}
          />
        </div>
      </Container>
    </div>
  );
}

export default App;
