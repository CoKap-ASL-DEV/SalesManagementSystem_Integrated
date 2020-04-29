import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styled from 'styled-components';

const SpanStyle = styled.span`
   {
    padding-bottom: 3px;
  }
`;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    //flexWrap: 'wrap',
    alignContent: 'center',
    height: 33,

    // backgroundColor:"#eeeeee"
  },
  formControl: {
    margin: theme.spacing(0),
    minWidth: 145,
  },
  Select: {
    flexBasis: 150,
    height: 38,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function FormType(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    type: '',
  });

  const handleChange = event => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });

    console.log(event.target.value);
    props.typeSetter(event.target.value);
  };

  return (
    <div className={classes.root}>
      <FormControl variant="outlined" className={classes.formControl}>
        <SpanStyle>
          <InputLabel htmlFor="outlined-age-native-simple">보상유형</InputLabel>
        </SpanStyle>
        <Select
          native
          className={classes.Select}
          value={props.RewardType}
          onChange={handleChange}
          label="보상유형"
          inputProps={{
            name: 'type',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value={0} />
          <option value={'처분'}>처분</option>
          <option value={'실시'}>실시</option>
        </Select>
      </FormControl>
    </div>
  );
}

export default FormType;
