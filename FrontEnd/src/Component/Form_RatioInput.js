import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
    //backgroundColor:"#eeeeee"
  },
  margin: {
    margin: theme.spacing(1.5)
    //   marginTop: theme.spacing(3)
  },
  textField: {
    flexBasis: 150
  }
}));

export default function OutlinedInputAdornments(props) {
  const classes = useStyles();


  const readprops = props.readonly === "true";

  return (
    <div className={classes.root}>
      <h3 className={clsx(classes.margin, classes.textField)}>{props.title}</h3>
            

      <TextField
        id="Form_PurchaseRatio"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="Purchase_Ratio"
        value={props.PurchaseRatio}
        onChange={props.PurchaseRatiohandler}
        InputProps={{
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
          endAdornment: (
            <InputAdornment position="end">{props.placeholder}</InputAdornment>
          ),
          readOnly: readprops
        }}
      />
    </div>
  );
}
