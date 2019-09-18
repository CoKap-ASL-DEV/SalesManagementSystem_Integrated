// import React from 'react';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import TextField from '@material-ui/core/TextField';


// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     backgroundColor:"#eeeeee"

//   },
//   margin: {
//     margin: theme.spacing(1),
//     marginTop: theme.spacing(3)
//   },
//   textField: {
//     flexBasis: 170,
//   },
// }));

// export default function OutlinedInputAdornments(props) {
//   const classes = useStyles();
//   const [values, setValues] = React.useState({
//     price_Mver_USD: '',
//     price_Sver_USD: '',
//     price_SAver_USD: '',
//     price_MPack_USD: '',
//   });

//   const handleChange = prop => event => {
//     setValues({ ...values, [prop]: event.target.value });
//   };


//   const readprops = (props.readonly==="true");
//   var txt = []
  

//   for(var i=0; i<4; i++) {
//     txt.push(<h1>hi thete</h1>)
// }

//   return (
// <div className={classes.root}>
//     <h3 className={clsx(classes.margin, classes.textField)}>{props.title}</h3>
//       {txt.map(obj=>(obj))}
//    </div>
        
//   );
// }