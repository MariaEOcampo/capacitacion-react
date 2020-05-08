import React from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Article from './pages/article';

const App = () =>{
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/article" component={Article}/> 
        </Switch>          
      </BrowserRouter>   
  )
}

export default App; 
