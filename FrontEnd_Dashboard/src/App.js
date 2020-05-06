import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import AuthPage from 'pages/AuthPage';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';
import { observer, inject } from 'mobx-react';

const SalesInformationInput = React.lazy(() =>
  import('pages/SalesInformationInput/IndexPage'),
);
const SalesInformationList = React.lazy(() =>
  import('pages/SalesInformationList/IndexPage'),
);
const PurchaseList = React.lazy(() => import('pages/PurchaseList/IndexPage'));
const RewardList = React.lazy(() => import('pages/RewardList/IndexPage'));
const PatentInfo = React.lazy(() => import('pages/PatentInfo/IndexPage'));
const NotFoundPage = React.lazy(() => import('pages/NotFoundPage'));

const RootRedirect = () => <Redirect to="/sale-list" />;
const NotFoundRedirect = () => <Redirect to="/not-found" />;

const styleLink = document.createElement('link');
styleLink.rel = 'stylesheet';
styleLink.href =
  'https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css';
document.head.appendChild(styleLink);

class App extends React.Component {
  render() {
    return (
      // <BrowserRouter basename={getBasename()}>
      <BrowserRouter>
        <Switch>
          <LayoutRoute
            exact
            path="/login"
            layout={EmptyLayout}
            component={props => <AuthPage {...props} authState={STATE_LOGIN} />}
          />
          <LayoutRoute
            exact
            path="/signup"
            layout={EmptyLayout}
            component={props => (
              <AuthPage {...props} authState={STATE_SIGNUP} />
            )}
          />

          <MainLayout breakpoint={this.props.breakpoint}>
            <React.Suspense fallback={<PageSpinner />}>
              <Switch>
                <Route exact path="/" component={RootRedirect} />

                <Route
                  exact
                  path="/sale-list"
                  component={SalesInformationList}
                />
                <Route exact path="/purchase-list" component={PurchaseList} />
                <Route
                  exact
                  path="/sales-inform-input"
                  component={SalesInformationInput}
                />
                <Route exact path="/reward-list" component={RewardList} />
                <Route exact path="/patent-info" component={PatentInfo} />
                <Route exact path="/not-found" component={NotFoundPage} />
                <Route exact component={NotFoundRedirect} />
              </Switch>
            </React.Suspense>
          </MainLayout>
        </Switch>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
