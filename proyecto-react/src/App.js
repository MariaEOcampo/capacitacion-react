import React from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Recipes from './pages/recipes';

const App = () =>{
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/recipes" component={Recipes}/> 
        </Switch>          
      </BrowserRouter>   
  )
}

export default App; 
