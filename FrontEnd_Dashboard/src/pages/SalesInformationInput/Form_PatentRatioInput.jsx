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
        //InputLabelProps={{ shrink: props.shrink }}
        id="Form_KEPCORatio"
        type="number"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="한전지분율"
        value={props.KEPCORatio ? props.KEPCORatio : ''}
        onChange={props.KEPCORatiohandler}
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
        id="Form_MokpoRatio"
        type="number"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="목포해양대지분율"
        value={props.MokpoRatio ? props.MokpoRatio : ''}
        onChange={props.MokpoRatiohandler}
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
      {'\u00A0'}
      {'\u00A0'}
      {'\u00A0'}
      {'\u00A0'}
      {'\u00A0'}
      {'\u00A0'}
      {'\u00A0'}
      {'\u00A0'}

      {'\u00A0'}
      {'\u00A0'}
      <TextField
        InputLabelProps={{ shrink: true }}
        //InputLabelProps={{ shrink: props.shrink }}
        id="Form_KSMRatio"
        type="number"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="김성민"
        value={props.KSMRatio ? props.KSMRatio : ''}
        onChange={props.KSMRatiohandler}
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
        id="Form_KDSRatio"
        type="number"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="김동섭"
        value={props.KDSRatio ? props.KDSRatio : ''}
        onChange={props.KDSRatiohandler}
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
        id="Form_JSSRatioRatio"
        type="number"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="전시식"
        value={props.JSSRatio ? props.JSSRatio : ''}
        onChange={props.JSSRatiohandler}
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
        id="Form_KBSRatio"
        type="number"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="김병석"
        value={props.KBSRatio ? props.KBSRatio : ''}
        onChange={props.KBSRatiohandler}
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
    </div>
  );
}
