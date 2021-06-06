import {
  Grid,
  Container,
  makeStyles,
  Paper,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { Home } from "@material-ui/icons";
const useStyles = makeStyles(function (theme) {
  return {
    griditem: {},
    paper: {
      padding: theme.spacing(2),
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      textAlign: "center",
      color: theme.palette.text.secondary,
      cursor: "pointer",
      boxShadow: theme.shadows[10],
      transition: "all .3s",
      "&:hover": {
        boxShadow: theme.shadows[2],
      },
    },
    container: {
      // padding: theme.spacing(6),
      height: "100vh",
      // alignContent: "center",
      position: "relative",
      top: 80,
    },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  };
});

const ListItem = ({ title, to }) => {
  const classes = useStyles();
  const history = useHistory();

  const navigateTo = () => history.push(to);

  return (
    <Grid item xs={6} className={classes.griditem}>
      <Paper className={classes.paper} onClick={navigateTo}>
        {title}
      </Paper>
    </Grid>
  );
};

const Dashboard = () => {
  const classes = useStyles();
  const navi = useHistory();
  const navHome = () => navi.push("/");
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <h1 style={{ flex: 1 }}>Dashboard</h1>
          <Home onClick={navHome} />
        </Toolbar>
      </AppBar>
      <Container className={classes.container} maxWidth="sm">
        <Grid container justify="center" spacing={4}>
          <ListItem title="Todo" to="/todo" />
          <ListItem title="Expense Calculator" to="/expense" />
          <ListItem title="Expense Calculator" to="/expense-calculator" />
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
