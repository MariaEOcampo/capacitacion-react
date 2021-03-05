import React from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Article from './pages/article';
import Comments from './pages/comments';
import Fitness from './pages/fitness';

const App = () =>{
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/article" component={Article}/> 
          <Route exact path="/comments" component={Comments}/>
          <Route exact path="/fitness" component={Fitness}/>
        </Switch>          
      </BrowserRouter>   
  )
}

export default App; 
