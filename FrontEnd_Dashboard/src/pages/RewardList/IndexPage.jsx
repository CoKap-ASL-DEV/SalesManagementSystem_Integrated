import React, { useState } from 'react';

import { Tabs } from 'antd';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Page from 'components/Page';

import SellFixedTable from './SellTableFixed';
import SellDescription from './SellDescription';
import ExecFixedTable from './ExecTableFixed';
import ExecDescription from './ExecDescription';
/**
 * 아르기닌: 짧고 굵은 운동
 * 시트룰린: 얇고 긴 운동
 * 카페인: 알약. 15~1시간 전. 체중x3~6mg.
 * 크레아틴: 운동전에 섭취하면 유산소에 도움. 근성장에 도움. san의 퍼포먼스 크레아틴
 * 베타알라닌: 부스터. 얼굴 따갑 부작용(일시적). 근지구력 운동에 도움. 1세트가 1~4분인 경우.(크레아틴이랑 먹으면 좋음)
 * 타우린: 운동수행, 지방연소, 근지구력 등. 5g.
 */
const { TabPane } = Tabs;
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
  const [diffTotal, setDiffTotal] = useState(0);
  const [techTotal, setTechTotal] = useState(0);

  return (
    <Page className="sales-information-list" title="보상 내역">
      <Grid className="pt-5" container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Tabs
              defaultActiveKey="1"
              size="large"
              style={{ marginBottom: 32 }}
            >
              <TabPane tab="처분보상" key="1">
                <SellFixedTable setTechTotal={setTechTotal} />
                <SellDescription techTotal={techTotal} />
              </TabPane>
              <TabPane tab="실시보상" key="2">
                <ExecFixedTable setDiffTotal={setDiffTotal} />
                <ExecDescription diffTotal={diffTotal} />
              </TabPane>
            </Tabs>
          </Paper>
        </Grid>
      </Grid>
    </Page>
  );
};
