import React from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Article from './pages/article';
import FormPage from './pages/form';

const App = () =>{
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/article" component={Article}/> 
          <Route exact path="/form" component={FormPage}/> 
        </Switch>          
      </BrowserRouter>   
  )
}

export default App; 
