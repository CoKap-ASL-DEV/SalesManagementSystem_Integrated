import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center',
    height: 40,
    //backgroundColor:"#eeeeee"
  },
  margin: {
    margin: theme.spacing(0),
    //   marginTop: theme.spacing(3)
  },
  subjectText: {
    flexBasis: 0,
  },

  textField: {
    flexBasis: 120,
    height: 36,
  },
}));

export default function OutlinedInputAdornments(props) {
  const classes = useStyles();

  const readprops = props.readonly === 'true';

  return (
    <div className={classes.root}>
      <h3 className={clsx(classes.margin, classes.subjectText)}>
        {props.title}
      </h3>

      <TextField
        InputLabelProps={{ shrink: true }}
        // InputLabelProps={{ shrink: props.shrink }}
        id="Form_PurchaseRatio"
        type="number"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="구매비율"
        value={props.PurchaseRatio ? props.PurchaseRatio : ''}
        onChange={props.PurchaseRatiohandler}
        InputProps={{
          className: classes.textField,
          endAdornment: (
            <InputAdornment position="end">{props.placeholder}</InputAdornment>
          ),
          readOnly: readprops,
        }}
      />
      {'\u00A0'}
      {'\u00A0'}
      {'\u00A0'}
      {'\u00A0'}

      {'\u00A0'}
      {'\u00A0'}
      <TextField
        InputLabelProps={{ shrink: true }}
        // InputLabelProps={{ shrink: props.shrink }}
        id="Form_ExecPurchaseRatio"
        type="number"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="실시구매비율"
        value={props.ExecPurchaseRatio ? props.ExecPurchaseRatio : ''}
        onChange={props.ExecPurchaseRatiohandler}
        InputProps={{
          className: classes.textField,
          endAdornment: (
            <InputAdornment position="end">{props.placeholder}</InputAdornment>
          ),
          readOnly: readprops,
        }}
      />
      {'\u00A0'}
      {'\u00A0'}
      {'\u00A0'}
      {'\u00A0'}

      {'\u00A0'}
      {'\u00A0'}
      <TextField
        InputLabelProps={{ shrink: true }}
        //InputLabelProps={{ shrink: props.shrink }}
        id="Form_TechRatio"
        type="number"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="기술요율"
        value={props.TechRatio ? props.TechRatio : ''}
        onChange={props.TechRatiohandler}
        InputProps={{
          className: classes.textField,
          endAdornment: (
            <InputAdornment position="end">{props.placeholder}</InputAdornment>
          ),
          readOnly: readprops,
        }}
      />

      {'\u00A0'}
      {'\u00A0'}
      {'\u00A0'}
      {'\u00A0'}

      {'\u00A0'}
      {'\u00A0'}
      <TextField
        InputLabelProps={{ shrink: true }}
        //InputLabelProps={{ shrink: props.shrink }}
        id="Form_RewardRatio"
        type="number"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="보상비율"
        value={props.RewardRatio ? props.RewardRatio : ''}
        onChange={props.RewardRatiohandler}
        InputProps={{
          className: classes.textField,
          endAdornment: (
            <InputAdornment position="end">{props.placeholder}</InputAdornment>
          ),
          readOnly: readprops,
        }}
      />
    </div>
  );
}
