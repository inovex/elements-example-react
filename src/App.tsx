import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './index.scss';
import logo from './logo.svg';

import { InoList, InoListDivider, InoNavDrawer } from './shared/InovexElements';

import { HomeTodoApp } from './home-todo-app';
import { Dialog } from './ino-dialog';
import { Select } from './ino-select';
import { Fab } from './ino-fab';
import { NavItemLink } from './shared/components/NavItemLink';
import { Button } from './ino-button';

type CustomRoute = {
  to: string;
  label: string;
  component: any
}

const ROUTES: CustomRoute[] = [
  {
    to: '/ino-button',
    label: '<InoButton>',
    component: Button
  },
  {
    to: '/ino-dialog',
    label: '<InoDialog>',
    component: Dialog
  },
  {
    to: '/ino-fab',
    label: '<InoFab>',
    component: Fab
  },
  {
    to: '/ino-select',
    label: '<InoSelect>',
    component: Select
  }
];

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
          <img height={'50'} alt="react-icon" src={logo}/>
          <h2>inovex elements</h2>
          <span>React examples</span>
        </InoList>
        <InoList slot="content">
          <NavItemLink to="/home" label="TodoApp"></NavItemLink>
          <InoListDivider/>
          {
            ROUTES.map(({ to, label }) => (
                <NavItemLink key={to} to={to} label={label}/>
              )
            )
          }
        </InoList>
        <main slot="app">
          <Switch>
            <Route exact path="/">
              <Redirect to="/home"/>
            </Route>
            <Route path="/home">
              <HomeTodoApp/>
            </Route>
            {
              ROUTES.map((route) => (
                  <Route key={route.to} path={route.to} component={route.component}/>
                )
              )
            }
          </Switch>
        </main>
      </InoNavDrawer>
    </Router>
  );
};

export default App;
