import React from 'react';
import '../../App';
import Header from '../header';
import Nav from '../nav';
import Footer from '../footer';
import '../layout/layout.scss';

const Layout = (props) => {
    return (
        <React.Fragment>
            <div className="layout__container">
            <Header/>
            <Nav/>            
                {props.children}
            <Footer/>
            </div>
        </React.Fragment>
    )
}

export default Layout;