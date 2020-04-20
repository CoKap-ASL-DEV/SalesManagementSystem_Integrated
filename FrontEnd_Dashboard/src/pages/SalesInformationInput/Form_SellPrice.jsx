import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
    height: 20
    //backgroundColor:"#eeeeee"
  },
  margin: {
    margin: theme.spacing(0.5)
    //  marginTop: theme.spacing(3)
  },
  subjectText: {
    flexBasis: 150
  },

  textField: {
    flexBasis: 150,
    height: 40
  }
}));

export default function OutlinedInputAdornments(props) {
  const classes = useStyles();

  //const {params} = props.params;
  const readprops = props.readonly === "true";

  return (
    <div className={classes.root}>
      <h3 className={clsx(classes.margin, classes.subjectText)}>
        {props.title}
      </h3>

      <TextField
        InputLabelProps={{ shrink: props.shrink }}
        id="Form_SellPrice_Mver"
        type="number"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="M-ver."
        value={props.SellPrice_Mver}
        onChange={props.Mverhandler}
        InputProps={{
          className: classes.textField,
          endAdornment: (
            <InputAdornment position="end">{props.placeholder}</InputAdornment>
          ),
          readOnly: readprops
        }}
      />
      <TextField
        InputLabelProps={{ shrink: props.shrink }}
        id="Form_SellPrice_Sver"
        type="number"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="S-ver"
        value={props.SellPrice_Sver}
        onChange={props.Sverhandler}
        InputProps={{
          className: classes.textField,
          endAdornment: (
            <InputAdornment position="end">{props.placeholder}</InputAdornment>
          ),
          readOnly: readprops
        }}
      />

      <TextField
        InputLabelProps={{ shrink: props.shrink }}
        id="Form_SellPrice_SAver"
        type="number"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="SA-ver"
        value={props.SellPrice_SAver}
        onChange={props.SAverhandler}
        InputProps={{
          className: classes.textField,
          endAdornment: (
            <InputAdornment position="end">{props.placeholder}</InputAdornment>
          ),
          readOnly: readprops
        }}
      />

      <TextField
        InputLabelProps={{ shrink: props.shrink }}
        id="Form_SellPrice_MPack"
        type="number"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="M-pack"
        value={props.SellPrice_MPack}
        onChange={props.MPackhandler}
        InputProps={{
          className: classes.textField,
          endAdornment: (
            <InputAdornment position="end">{props.placeholder}</InputAdornment>
          ),
          readOnly: readprops
        }}
      />
    </div>
  );
}
