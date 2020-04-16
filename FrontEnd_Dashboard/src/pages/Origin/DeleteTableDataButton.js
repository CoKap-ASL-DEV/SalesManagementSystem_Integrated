import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Mutation } from "@apollo/react-components";

import DELETE_TABLE_QUERY from "../../services/delete_table";
import { Popconfirm } from "antd";
import GET_TABLE from "../../services/get_table";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function DelButton(props) {
  const classes = useStyles();

  const { delId } = props;

  return (
    ///addFromData: mutation 함수처럼 호출 가능하게(서버측 이름과 맞출필요 없음),
    /// data : mutation return값

    <Mutation
      mutation={DELETE_TABLE_QUERY}
      refetchQueries={[{ query: GET_TABLE }]}
      // update: (cache, { data }) => {
      //   cache.writeQuery({
      //     query: GET_TABLE,
      //     data
      //   });
      // }
    >
      {(deleteFormData, { data }) => (
        <Popconfirm
          title="Sure to delete?"
          onConfirm={() => {
            deleteFormData({
              variables: {
                id: parseInt(delId)
              }
            });
          }}
        >
          <Button
            variant="outlined"
            size="small"
            color="primary"
            className={classes.margin}
          >
            Del
          </Button>
        </Popconfirm>
      )}
    </Mutation>
  );
}
