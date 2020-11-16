import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
} from 'react-router-dom';
import './index.scss';
import logo from './logo.svg';

import {
  InoList,
  InoNavItem,
  InoNavDrawer,
  InoIcon,
} from './shared/InovexElements';

import { HomeTodoApp } from './home-todo-app';
import { Dialog } from './ino-dialog';
import { Select } from './ino-select';
import { Fab } from './ino-fab';

const NavItemLink = ({
  label,
  to,
  activeOnlyWhenExact = true,
}: {
  label: string;
  to: string;
  activeOnlyWhenExact?: boolean;
}) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });
  return (
    <Link className={'router-link'} to={to}>
      <InoNavItem inoActivated={match ? true : false} inoText={label}>
        {/* for now just use an empty icon to avoid jumping content issue */}
        <InoIcon inoIcon=""></InoIcon>
      </InoNavItem>
    </Link>
  );
};

const App: React.FC = () => {
  const [navOpen, setNavOpen] = React.useState(true);
  return (
    <Router>
      <InoNavDrawer
        inoOpen={navOpen}
        inoAnchor="left"
        inoVariant="docked"
        onOpenChange={(event) => {
          setNavOpen(event.detail);
        }}
      >
        <InoList slot="header">
          <img height={'50'} alt="react-icon" src={logo} />
          <h2>inovex elements</h2>
          <span>React examples</span>
        </InoList>
        <InoList slot="content">
          <NavItemLink to="/home" label="TodoApp"></NavItemLink>
          <NavItemLink to="/ino-select" label="InoSelect"></NavItemLink>
          <NavItemLink to="/ino-dialog" label="InoDialog"></NavItemLink>
          <NavItemLink to="/ino-fab" label="InoFab"></NavItemLink>
        </InoList>
        <main slot="app">
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <HomeTodoApp />
            </Route>
            <Route path="/ino-dialog">
              <Dialog />
            </Route>
            <Route path="/ino-select">
              <Select />
            </Route>
            <Route path="/ino-fab">
              <Fab />
            </Route>
          </Switch>
        </main>
      </InoNavDrawer>
    </Router>
  );
};

export default App;
