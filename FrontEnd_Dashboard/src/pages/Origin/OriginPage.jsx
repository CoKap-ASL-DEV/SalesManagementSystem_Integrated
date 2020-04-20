import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import ProductForm from "./ProductForm";
import FixedTable from "./TableFixed";
import HistoryVar from "./HistoryVar";
import HistoryItems from "./HistoryItems";

// import APIClient from "./APIClient/apiclient";

// const styleLink = document.createElement("link");
// styleLink.rel = "stylesheet";
// styleLink.href =
//   "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
// document.head.appendChild(styleLink);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    //textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <div className={classes.root}>
        {/* <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        /> */}

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <br />
              <h1>Sales Management System</h1>
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <ProductForm />
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <HistoryVar />
              {/* <HistoryItems /> */}
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <FixedTable />
            </Paper>
          </Grid>
          {/* <Grid item xs={12}>
            <Paper className={classes.paper}> <APIClient /> </Paper>
          </Grid> */}
        </Grid>
      </div>
    </div>
  );
}

export default App;