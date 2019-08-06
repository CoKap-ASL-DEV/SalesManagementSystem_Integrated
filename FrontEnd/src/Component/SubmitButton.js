import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function ButtonSizes() {
  const classes = useStyles();

  return (

   
      <div>
     
        <Button variant="outlined" size="medium" color="primary" className={classes.margin}>
          Submit
        </Button>
    
      </div>
    
 
  );
}