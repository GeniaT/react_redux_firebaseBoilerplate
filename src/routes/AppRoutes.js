import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import WrongPage from '../components/WrongPage';
import Component1Container from '../containers/Component1Container';
import Component2Container from '../containers/Component2Container';
import Component3Container from '../containers/Component3Container';

const AppRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact={true}/>
      <Route path="/container1" component={Component1Container} />
      <Route path="/container2" component={Component2Container}/>
      <Route path="/container3/:id" component={Component3Container}/>
      <Route component={WrongPage}/>
    </Switch>
  </BrowserRouter>
)


export default AppRoutes;
