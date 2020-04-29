import React from 'react';
import Header from './components/header';
import Nav from './components/nav';
import Article from './components/article';
import Aside from './components/aside';
import SectionOne from './components/section_one';
import SectionTwo from './components/section_two';
import SectionThree from './components/section_three';
import Footer from './components/footer';
import './sections.scss';


 function App() {
  return (
    <div className = "Container">
      <Header/>
        <Nav/>
        <Article/>
        <Aside/>
         <div className ='sections'>
           <div className ='sections_container'>
            <SectionOne />
            <SectionTwo/>
            <SectionThree/>
           </div>
        </div>
      <Footer/>
    </div>
  
  )
}



 export default App; 
