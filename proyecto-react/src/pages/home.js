import React from 'react';
import Article from '../components/article';
import Aside from '../components/aside';
import Sections from '../components/sections';
import Layout from '../components/layout';
import Calc from '../components/calculator';

const Home = () => {
    return(
    <React.Fragment>
        <Layout>
            <Article/>
            <Aside/>
            <Sections/>
            <Calc/>
        </Layout> 
    </React.Fragment>
    )
} 

export default Home;