import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import OrphanagesMap from '../pages/OrphanagesMap';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import CreateOrphanage from '../pages/CreateOrphanage';
import Orphanage from '../pages/Orphanage';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/app" component={OrphanagesMap} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />

      <Route path="/orphanages/create" isPrivate component={CreateOrphanage} />
      <Route path="/orphanages/:id" component={Orphanage} />
    </Switch>
  );
};

export default Routes;
