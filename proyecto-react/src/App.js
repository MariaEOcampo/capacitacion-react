import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Home from './pages/home';
import Recipes from './pages/recipes';

const App = () =>{
  return (
      <BrowserRouter>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/recipes" component={Recipes}/>         
      </BrowserRouter>   
  )
}

export default App; 
