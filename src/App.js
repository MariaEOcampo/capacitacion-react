import React from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Article from './pages/article';
import Comments from './pages/comments';

const App = () =>{
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/article" component={Article}/> 
          <Route exact path="/comments" component={Comments}/>
        </Switch>          
      </BrowserRouter>   
  )
}

export default App; 
