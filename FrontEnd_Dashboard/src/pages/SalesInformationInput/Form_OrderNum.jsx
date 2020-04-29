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
    height: 33,
    //backgroundColor:"#eeeeee"
  },
  margin: {
    margin: theme.spacing(0.0),
    //  marginTop: theme.spacing(3)
  },
  subjectText: {
    flexBasis: 0,
  },

  textField: {
    flexBasis: 150,
    height: 38,
  },
}));

export default function OutlinedInputAdornments(props) {
  const classes = useStyles();

  //const {params} = props.params;
  const readprops = props.readonly === 'true';

  return (
    <div className={classes.root}>
      <h3 className={clsx(classes.margin, classes.subjectText)}>
        {props.title}
      </h3>

      <TextField
        InputLabelProps={{ shrink: props.shrink[1] }}
        id="Form_OrderNum_Mver"
        type="number"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="M-ver."
        value={props.OrderNum_Mver ? props.OrderNum_Mver : ''}
        onChange={props.Mverhandler}
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
        InputLabelProps={{ shrink: props.shrink[2] }}
        id="Form_OrderNum_Sver"
        type="number"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="S-ver"
        value={props.OrderNum_Sver ? props.OrderNum_Sver : ''}
        onChange={props.Sverhandler}
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
        InputLabelProps={{ shrink: props.shrink[3] }}
        id="Form_OrderNum_SAver"
        type="number"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="SA-ver"
        value={props.OrderNum_SAver ? props.OrderNum_SAver : ''}
        onChange={props.SAverhandler}
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
        InputLabelProps={{ shrink: props.shrink[4] }}
        id="Form_OrderNum_MPack"
        type="number"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="M-pack"
        value={props.OrderNum_MPack ? props.OrderNum_MPack : ''}
        onChange={props.MPackhandler}
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
