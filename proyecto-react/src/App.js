import React from 'react';
import Header from './components/header';
import Nav from './components/nav';
import Article from './components/article';
import Aside from './components/aside';



 function App() {
  return (
    <div className = "Container">
      <Header/>
      <Nav/>
      <Article/>
      <Aside/>
    </div>
  
  )
}



 export default App; 
