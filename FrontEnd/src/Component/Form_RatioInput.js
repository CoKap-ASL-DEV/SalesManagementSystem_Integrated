import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignContent : "center",
    height:20,
    //backgroundColor:"#eeeeee"
  },
  margin: {
    margin: theme.spacing(0.5)
    //   marginTop: theme.spacing(3)
  },
  subjectText: {
    flexBasis: 150,    
    
  },

  textField: {
    flexBasis: 150,
    height:40,
  }
}));

export default function OutlinedInputAdornments(props) {
  const classes = useStyles();


  const readprops = props.readonly === "true";

  return (
    <div className={classes.root}>
      <h3 className={clsx(classes.margin, classes.subjectText)}>{props.title}</h3>
            

      <TextField
        id="Form_PurchaseRatio"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="Purchase_Ratio"
        value={props.PurchaseRatio}
        onChange={props.PurchaseRatiohandler}
        InputProps={{
          className : classes.textField,
          endAdornment: (
            <InputAdornment position="end">{props.placeholder}</InputAdornment>
          ),
          readOnly: readprops
        }}
      />
      <TextField
        id="Form_TechRatio"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="Tech_Ratio"
        value={props.TechRatio}
        onChange={props.TechRatiohandler}
        InputProps={{
          className : classes.textField,
          endAdornment: (
            <InputAdornment position="end">{props.placeholder}</InputAdornment>
          ),
          readOnly: readprops
        }}
      />

      <TextField
        id="Form_KEPCORatio"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="KEPCO_Ratio"
        value={props.KEPCORatio}
        onChange={props.KEPCORatiohandler}
        InputProps={{
          className : classes.textField,
          endAdornment: (
            <InputAdornment position="end">{props.placeholder}</InputAdornment>
          ),
          readOnly: readprops
        }}
      />

      <TextField
        id="Form_MokpoRatio"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="MokPo_Ratio"
        value={props.MokpoRatio}
        onChange={props.MokpoRatiohandler}
        InputProps={{
          className : classes.textField,
          endAdornment: (
            <InputAdornment position="end">{props.placeholder}</InputAdornment>
          ),
          readOnly: readprops
        }}
      />
      <TextField
        id="Form_RewardRatio"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="Reward_Ratio"
        value={props.RewardRatio}
        onChange={props.RewardRatiohandler}
        InputProps={{
          className : classes.textField,
          endAdornment: (
            <InputAdornment position="end">{props.placeholder}</InputAdornment>
          ),
          readOnly: readprops
        }}
      />
    </div>
  );
}
