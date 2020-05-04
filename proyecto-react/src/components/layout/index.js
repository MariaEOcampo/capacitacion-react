import React from 'react';
import '../../App';
import Header from '../header';
import Nav from '../nav';
import Footer from '../footer';



const Layout = (props) => {
    return (
        <React.Fragment>
            <Header/>
            <Nav/>            
        {props.children}
        <Footer/>
        </React.Fragment>
    )
}

export default Layout;