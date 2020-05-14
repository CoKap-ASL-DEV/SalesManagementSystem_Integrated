import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import { Mutation } from '@apollo/react-components';
import { useMutation } from '@apollo/react-hooks';

import DELETE_TABLE_QUERY from '../../services/delete_table';
import { Popconfirm } from 'antd';
import GET_TABLE from '../../services/get_table';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function DelButton(props) {
  const classes = useStyles();

  const { delId } = props;

  const [deleteFormData, { data }] = useMutation(DELETE_TABLE_QUERY, {
    refetchQueries: [{ query: GET_TABLE }],
  });

  return (
    <Popconfirm
      title="Sure to delete?"
      onConfirm={() => {
        deleteFormData({
          variables: {
            id: parseInt(delId),
          },
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
  );
}
