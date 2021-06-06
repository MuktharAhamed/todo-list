import "App.css";
import ExampleApp from "./Modal";
import React, { Component, useState, usestate, setState } from "react";
import { Box, Container, IconButton } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import Sidepanel from "./sidepanel";
import MyButton from "./Button";
import { ArrowBackIos } from "@material-ui/icons";
import { useHistory } from "react-router";
function Expense() {
  const [acess, visible] = useState("true");
  var [sort, setsort] = useState(false);
  const sorting = () => {
    setsort(sort === true ? false : true);
  };
  const navigator = useHistory();
  const naviHome = () => {
    navigator.push("/");
  };
  return (
    <div
      style={{
        backgroundColor: "#ffe5e9",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // position: "absolute",
        // top: "0",
        // left: "0",
        // right: "0",
        // bottom: "0",
        // margin: "auto",
      }}
    >
      <IconButton onClick={naviHome}>
        <ArrowBackIos />
      </IconButton>
      <div
        style={{
          borderRadius: 10,
          overflow: "hidden",
          display: "flex",
          backgroundColor: "lightgray",
          width: "80%",
          minWidth: 800,
          maxWidth: 1000,
          boxShadow: "0 0 20px 0 rgb(0 0 0 /0.2)",
        }}
      >
        <div style={{ padding: "45px 20px", flex: "1" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 15,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  fontSize: "20px",
                  marginRight: "30px",
                  fontWeight: "bold",
                }}
              >
                Budget
              </h2>
              <SearchBar
                style={{
                  // height: "80%",
                  // width: "20%",
                  width: 150,
                  // marginTop: "10px",
                  // marginRight: "-30px",
                }}
              ></SearchBar>
            </div>
            <div
              style={{
                // width: "380px",
                display: "flex",
                justifyContent: "space-between",
                // marginTop: "20px",
                // marginLeft: "40px",
              }}
            >
              <Box ml={2}>
                <MyButton text="Overview" disabled={true} />
              </Box>
              <Box ml={2}>
                <MyButton text="Finance" />
              </Box>
              <Box ml={2}>
                <MyButton text="Calander" disabled={true} />
              </Box>
              <Box ml={2}>
                <MyButton text="Events" disabled={true} />
              </Box>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 15,
            }}
          >
            <div>
              <h1 style={{ color: "darkblue" }}>Home Wallet</h1>
              <p>Change Default Wallet</p>
            </div>
            <SearchBar
              placeholder="Calendar"
              style={{ height: "40px", width: "22%" }}
            ></SearchBar>
          </div>
          <div
            style={{
              display: "flex",
              // width: "600px",
              justifyContent: "space-between",
              // height: "30px",
              marginBottom: 15,
            }}
          >
            <MyButton text="Group By ↑↓" disabled={true} />
            <MyButton text="Realisation ↑↓" />
            <MyButton text="Dates ↑↓" disabled={true} />
            <MyButton text="Types ↑↓" disabled={true} />
            <MyButton text="Sample ↑↓" disabled={true} />
            <MyButton text="Extended ↑↓" disabled={true} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 15,
            }}
          >
            <h3>January 15 2020</h3>
            <p>No of Transactions:04</p>
            <p>Value:$7408.00</p>
          </div>
          <ExampleApp flag={sort} />
        </div>
        <Sidepanel />
      </div>
    </div>
  );
}

export default Expense;
