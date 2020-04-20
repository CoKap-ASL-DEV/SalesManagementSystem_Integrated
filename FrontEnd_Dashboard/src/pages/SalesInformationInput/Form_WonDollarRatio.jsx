import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
//import { sizing } from '@material-ui/system';
import TextField from '@material-ui/core/TextField';
import { DatePicker } from 'antd';
import moment from 'moment';
//import { height } from "@material-ui/system";
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center',
    height: 20,

    // backgroundColor:"#eeeeee"
  },
  margin: {
    margin: theme.spacing(0.5),
    //  marginTop: theme.spacing(3)
  },

  subjectText: {
    flexBasis: 150,
  },

  textField: {
    flexBasis: 150,
    height: 40,
    // paddingTop: 0,
    // paddingBottom: 0,
    //textAlignVertical: 'top',
    // textAlignVertical: 'center',
    // textAlign : 'middle',
    // verticalAlign : "middle",
    //fontSize: "1.5em"
  },
}));

export default function OutlinedInputAdornments(props) {
  const classes = useStyles();
  const wdrDate = props.WDRDates == null ? null : moment(props.WDRDates);

  return (
    <div className={classes.root}>
      <h3 className={clsx(classes.margin, classes.subjectText)}>
        {props.title}
      </h3>

      {/* {dateofbirth !== "" ? moment(dateofbirth) : null} */}
      <DatePicker
        defaultValue={null}
        value={wdrDate}
        size="large"
        placeholder="환율기준일"
        className={classes.textField}
        onChange={props.WDRDatehandler}
      />
      {'\u00A0'}
      {'\u00A0'}
      {'\u00A0'}
      {'\u00A0'}
      {'\u00A0'}
      {'\u00A0'}
      {'\u00A0'}

      <TextField
        InputLabelProps={{ shrink: props.shrink }}
        id="Form_WonDollarRatio"
        type="number"
        className={classes.textField}
        variant="outlined"
        label={props.label}
        value={props.WonDollarRatio ? props.WonDollarRatio : ''}
        onChange={props.WonDollarRatiohandler}
        InputProps={{
          className: classes.textField,
          endAdornment: (
            <InputAdornment position="end">{props.placeholder}</InputAdornment>
          ),
        }}
      />
    </div>
  );
}
