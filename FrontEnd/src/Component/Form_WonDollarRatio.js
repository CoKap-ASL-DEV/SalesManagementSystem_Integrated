import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
    // backgroundColor:"#eeeeee"
  },
  margin: {
    margin: theme.spacing(1.4)
    //  marginTop: theme.spacing(3)
  },
  textField: {
    flexBasis: 150
  }
}));

export default function OutlinedInputAdornments(props) {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <h3 className={clsx(classes.margin, classes.textField)}>{props.title}</h3>
      <TextField
        id="Form_WonDollarRatio"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label={props.label}
        value={props.WonDollarRatio}
        onChange={props.WonDollarRatiohandler}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">{props.placeholder}</InputAdornment>
          )
        }}
      />
    </div>
  );
}
