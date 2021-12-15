import { ThemeProvider } from 'styled-components';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home-page/home-page';
import Error from 'components/error/error';
import { appTheme } from './common';
import * as S from './app.styled';
import { browserHistory } from 'store/browser-history';
import { AppRoute } from 'const';

const App = () => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Quest}>
          <DetailedQuest />
        </Route>
        <Route exact path={AppRoute.Contacts}>
          <Contacts />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <Error />
          <Redirect to="/404" />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
