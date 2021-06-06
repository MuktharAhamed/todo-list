import "App.css";
import React, { Component, useState, useEffect } from "react";
import { Motorcycle, DriveEta, Edit, Close } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";

import { string, number, oneOf } from "prop-types";
import { Box } from "@material-ui/core";

const ExampleApp = (props) => {
  const [show, setshow] = useState("false");
  const [expenseon, setexpenseon] = useState("");
  const [amount, setamount] = useState("");
  const [edit, setedit] = useState(false);
  const [editItem, seteditItem] = useState({ expenseon: "", amount: "" });
  const [save, setSave] = useState([]);
  const handleedit = (exp, amt, id) => {
    setedit(true);
    seteditItem({ expenseon: exp, amount: amt, id });
  };
  const updateedit = (props) => {
    var index;
    var news = [...save];
    index = news.findIndex((e) => e.id === props.id);
    news[index].expenseon = props.expenseon;
    news[index].amount = props.amount;
    setSave({ save: news, edit: false });
  };
  const hideedit = () => {
    setedit(false);
  };
  const handeshow = () => {
    setshow(true);
  };
  const handlehide = () => {
    setshow(false);
  };
  const handleexpenseon = (props) => {
    seteditItem({ ...editItem, expenseon: props.expenseOn });
  };
  const handleamount = (props) => {
    seteditItem({ ...this.state.editItem, amount: props.amount });
  };
  const addbind = (props) => {
    var obj = {};
    var id = numbergeneration();
    obj.id = id;
    obj.expenseon = props.expenseOn;
    obj.amount = props.amount;
    setSave([...save, obj]);
  };
  const numbergeneration = () => {
    var id = 0;
    var lsave = 0;
    if (save.length > 0) {
      lsave = save.map((a) => a.id);
      id = Math.max(...lsave);
    }
    return id + 1;
  };
  const localstosave = (props) => {
    localStorage.setItem("data", JSON.stringify(save));
  };
  const deletecall = (props) => {
    var news = this.state.save.filter((e) => e.id != props.id);
  };
  useEffect(() => {
    var data = JSON.parse(localStorage.getItem("data"));
    if (data !== null) {
      var expenseon, amount;
      expenseon = data.map((e) => e.expenseon);
      amount = data.map((e) => e.amount);
      setexpenseon(expenseon);
      setamount(amount);
      setSave(JSON.parse(localStorage.getItem("data")));
    }
  }, []);
  return (
    <div>
      {/* <Modals
        handlehide={handlehide}
        show={show}
        // handlestate={handlestate}
        addbind={addbind}
      ></Modals> */}
      <Divlistcall
        flag={props.flag}
        save={save}
        handleedit={handleedit}
        edit={edit}
        updateedit={updateedit}
        delete={deletecall}
      />
      <Edit
        edit={edit}
        item={editItem}
        updateedit={updateedit}
        handleexpenseon={handleexpenseon}
        handleamount={handleamount}
        hideedit={hideedit}
      />
    </div>
  );
};

const Divlistcall = (props) => {
  var save = props.save;
  console.log("Divlistcall", save);

  return (
    <div style={{ maxHeight: 240, overflowY: "auto" }}>
      {props.flag === false
        ? save.map((item, index) => {
            let id = save.map((e) => e.id);
            return (
              <Divlist
                key={item.id}
                id={item.id}
                expenseon={item.expenseon}
                amount={item.amount}
                type="expense"
                handleedit={props.handleedit}
                edit={props.edit}
                updateedit={props.updateedit}
                delete={props.delete}
                icon={Edit}
              />
            );
          })
        : save.reverse().map((item, index) => {
            return (
              <Divlist
                key={item.id}
                id={item.id}
                expenseon={item.expenseon}
                amount={item.amount}
                handleedit={props.handleedit}
                edit={props.edit}
                updateedit={props.updateedit}
                delete={props.delete}
              />
            );
          })}
    </div>
  );
};

function Divlist(props) {
  console.log("divcall", props.id);
  const handleedit = () => {
    props.handleedit(props.expenseon, props.amount, props.id);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: "white",
          justifyContent: "space-between",
          // marginTop: "20px",
          // width: "600px",
          // marginLeft: "20px",
          // marginBottom: "20px",
          borderRadius: "10px",
          padding: "8px 10px",
          marginBottom: 10,
        }}
      >
        <Box alignItems="center" display="flex">
          {props.id === 1 ? (
            <Motorcycle
              style={{
                marginRight: "10px",
                backgroundColor: "mediumturquoise",
                borderRadius: "50%",
                padding: 5,
                fontSize: 30,
              }}
            ></Motorcycle>
          ) : (
            <DriveEta
              style={{
                marginRight: "10px",
                backgroundColor: "mediumpurple",
                borderRadius: "50%",
                padding: 5,
                fontSize: 30,
              }}
            ></DriveEta>
          )}
          {/* <h3>{props.expenseon}</h3> */}
          <Box>
            <Typography component="h1" variant="h5">
              {props.expenseon}
            </Typography>
            <Typography variant="caption">updated a minute ago</Typography>
          </Box>
        </Box>
        <Box alignItems="center" display="flex">
          <h3>{props.amount}</h3>
          <Box ml={2}>
            <button
              style={{
                border: "none",
              }}
              onClick={handleedit}
            >
              <i>
                <Edit />
              </i>
            </button>
          </Box>
          <Box ml={2}>
            <button
              style={{ border: "none" }}
              onClick={(event) => props.delete({ id: props.id })}
            >
              <i>
                <Close />
              </i>
            </button>
          </Box>
        </Box>
      </div>
    </>
  );
}

Divlist.propTypes = {
  id: number.isRequired,
  expenseon: string.isRequired,
};

// const Edit = ({
//   edit,
//   item,
//   updateedit,
//   handleexpenseon,
//   handleamount,
//   hideedit,
// }) => {
//   // {console.log("editcall",props.edit,props.expenseon,props.amount,props)}
//   console.log("editable", edit, item);
//   const { expenseon, amount, id } = item;
//   const edits = edit ? "modal display-block" : "modal display-none";
//   return (
//     <div className={edits}>
//       <section className="modal-main">
//         <input
//           onChange={(e) => handleexpenseon({ expenseon: e.target.value })}
//           value={expenseon}
//         ></input>
//         <input
//           onChange={(e) => handleamount({ amount: e.target.value })}
//           value={amount}
//         ></input>
//         <button onClick={(e) => updateedit({ expenseon, amount, id })}>
//           update
//         </button>
//         <button onClick={hideedit}>close</button>
//       </section>
//     </div>
//   );
// };
const Modals = ({
  // expenseon,
  // amount,
  handlehide,
  show,
  handlestate,
  addbind,
}) => {
  const [expenseOn, setExpenseOn] = useState("");
  const [amount, setAmount] = useState("");
  const forclasss =
    show === "true" ? "modal display-block" : "modal display-none";
  return (
    <div className={forclasss}>
      <section className="modal-main">
        <input
          placeholder="expenseon"
          value={expenseOn}
          onChange={(event) => setExpenseOn(event.target.value)}
        ></input>
        <input
          placeholder="amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        ></input>
        <button onClick={(event) => addbind({ expenseOn, amount })}>
          submit
        </button>
        <button onClick={handlehide}>close</button>
      </section>
    </div>
  );
};

export default ExampleApp;
