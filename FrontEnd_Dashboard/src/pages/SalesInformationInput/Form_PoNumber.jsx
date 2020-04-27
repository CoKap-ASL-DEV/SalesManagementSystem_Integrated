import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Upload from './Form_Upload';
//import { sizing } from '@material-ui/system';
import TextField from '@material-ui/core/TextField';
import { DatePicker } from 'antd';
import moment from 'moment';
//import { height } from "@material-ui/system";
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    //flexWrap: 'wrap',
    alignContent: 'center',
    height: 40,

    // backgroundColor:"#eeeeee"
  },
  margin: {
    margin: theme.spacing(0.0), //0.5
    //  marginTop: theme.spacing(3)
  },

  subjectText: {
    flexBasis: 0, //150
  },

  textField: {
    flexBasis: 150,
    height: 40,
  },
}));

export default function OutlinedInputAdornments(props) {
  const classes = useStyles();
  const issueDate = props.IssueDate == null ? null : moment(props.IssueDate);
  return (
    <div className={classes.root}>
      <h3 className={clsx(classes.margin, classes.subjectText)}>
        {props.title}
      </h3>

      <DatePicker
        //value={moment("1999-01-01")}

        defaultValue={null}
        //
        value={issueDate}
        size="large"
        placeholder="IssueDate"
        className={classes.textField}
        onChange={props.IssueDatehandler}
      />
      {'\u00A0'}
      {'\u00A0'}
      {'\u00A0'}
      {'\u00A0'}
      {'\u00A0'}
      {'\u00A0'}

      <TextField
        InputLabelProps={{ shrink: props.shrink[0] }}
        id="Form_PoNumber"
        className={classes.textField}
        variant="outlined"
        label={props.label}
        value={props.PoNumber ? props.PoNumber : ''}
        onChange={props.PoNumberhandler}
        InputProps={{
          className: classes.textField,
          endAdornment: (
            <InputAdornment position="end">{props.placeholder}</InputAdornment>
          ),
        }}
      />
      {'\u00A0'}
      {'\u00A0'}
      {'\u00A0'}
      {'\u00A0'}
      {'\u00A0'}
      {'\u00A0'}
      <Upload />
    </div>
  );
}
