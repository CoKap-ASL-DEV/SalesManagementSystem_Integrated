import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Page from 'components/Page';
import ProductForm from './ProductForm';
import HistoryVar from './HistoryVar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <Page className="sales-information-list" title="판매 정보 리스트">
      <Grid className="pt-5" container spacing={3}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <ProductForm />
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <HistoryVar />
          </Paper>
        </Grid>
      </Grid>
    </Page>
  );
};
