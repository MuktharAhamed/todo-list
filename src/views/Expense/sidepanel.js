import {
  LocalMall,
  Headset,
  NotificationsNone,
  Person,
  AddBox,
  AccountBalanceWallet,
  CastForEducation,
  TrendingUp,
} from "@material-ui/icons";
import Listdiv from "./listdiv";
const Sidepanel = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: 10,
        paddingTop: "45px",
        width: 200,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 10,
        }}
      >
        <NotificationsNone />
        <Person />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 15,
        }}
      >
        <h3>Wallets</h3>
        <AddBox style={{ marginLeft: 100 }} />
      </div>
      <div
        className="list"
        style={{
          display: "flex",
        }}
      >
        <AccountBalanceWallet fontSize="large" style={{ color: "indigo" }} />
        <Listdiv text="Home Wallet" amount="$235,000" />
      </div>
      <div
        className="list"
        style={{
          display: "flex",
        }}
      >
        <TrendingUp fontSize="large" style={{ color: "tomato" }} />
        <Listdiv text="Inverstment" amount="$875,000" />
      </div>
      <div>
        <hr style={{ color: "lightgray", marginBottom: 15 }}></hr>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 15,
        }}
      >
        <h3>Categories</h3>
        <AddBox />
      </div>
      <div className="list">
        <AccountBalanceWallet fontSize="large" style={{ color: "darkgreen" }} />
        <Listdiv text="Bills" amount="$235,000" />
      </div>
      <div className="list">
        <CastForEducation fontSize="large" style={{ color: "tan" }} />
        <Listdiv text="Education" amount="$125,000" />
      </div>
      <div className="list">
        <Headset fontSize="large" style={{ color: "hotpink" }} />
        <Listdiv text="Utility" amount="25 April" />
      </div>
      <div className="list">
        <LocalMall fontSize="large" style={{ color: "darkmagenta" }} />
        <Listdiv text="Shopping" amount="25 April" />
      </div>
    </div>
  );
};

export default Sidepanel;
