import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import './index.scss';

import { InoList, InoNavItem, InoNavDrawer } from './shared/InovexElements';

import { HomeTodoApp } from './home-todo-app';
import { Dialog } from './ino-dialog';
import { Select } from './ino-select';

const NavItemLink = ({
  label,
  to,
}: {
  label: string;
  to: string;
  activeOnlyWhenExact?: boolean;
}) => {
  return (
    <div>
      <Link className={'router-link'} to={to}>
        <InoNavItem inoText={label}></InoNavItem>
      </Link>
    </div>
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
          <img
            height={'50'}
            alt="react-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1920px-React-icon.svg.png"
          />

          <h2>inovex elements</h2>
          <span>React examples</span>
        </InoList>
        <InoList slot="content">
          <NavItemLink to="/home" label="TodoApp"></NavItemLink>
          <NavItemLink to="/ino-select" label="InoSelect"></NavItemLink>
          <NavItemLink to="/ino-dialog" label="InoDialog"></NavItemLink>
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
          </Switch>
        </main>
      </InoNavDrawer>
    </Router>
  );
};

export default App;
