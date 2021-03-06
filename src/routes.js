import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CarBrands from './pages/CarBrands';
import CarModels from './pages/CarModels';
import CarData from './pages/CarData';
import FavoriteCars from './pages/FavoriteCars';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={CarBrands} />
      <Route path="/models/:id" component={CarModels} />
      <Route path="/car/:brandid/:modelid/:year" component={CarData} />
      <Route path="/favorites" component={FavoriteCars} />
    </Switch>
  );
}
