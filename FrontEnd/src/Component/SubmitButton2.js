import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Query from "../APIClient/query";
import { Mutation } from "@apollo/react-components";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function SubmitButton2(props) {
  const classes = useStyles();

  return (
    <Mutation mutation={Query}>
      {(addFormData, { data }) => (
        <Button
          onClick={() => {
            addFormData(
              {variables: {SellPrice_Mver: 1000,
                    SellPrice_Sver: 2000,
                    SellPrice_SAver: 3000,
                    SellPrice_MPack: 4000,
                    OrderNum_Mver: 10,
                    OrderNum_Sver: 20,
                    OrderNum_SAver: 30,
                    OrderNum_MPack: 40,
                    WonDollarRatio: 50,
                    PurchaseRatio: 60,
                    TechRatio: 34,
                    KEPCORatio: 44,
                    MokpoRatio: 54,
                    RewardRatio: 64,
                    CreatedDate: "19-03-01",
                    IssueDate: "19-05-05",
                    PoNumber: "PO191007-2132",
                    WDRDate: "19-09-10"
              }}         
              );
              console.log("tetsssss");            
          }}
          //onClick={this.props.onSubmithandler}
          variant="outlined"
          size="medium"
          color="primary"
          className={classes.margin}
        >
          Submit
        </Button>
      )}
    </Mutation>
  );
}
