import React,{useEffect, useState, Fragment} from 'react';
import '../pages/style-pages.scss';
import Layout from '../components/layout';
import newArticle from '../services/article';
import Loader from 'react-loader-spinner';

const Article = () => {

const [articles,setArticles] = useState([]);
const [loading,setLoading] =useState(true);

useEffect(() =>{
    newArticle().then(res => {
        setArticles(res)
        setLoading(false)
    }); 
     
},[] )

console.log(articles)

const newarticles = articles[0]

return(
    <React.Fragment>
        <Layout>
            <div>
            {<div className="section__container">
                {loading ? <div><Loader className="dots"/></div> : 
                <Fragment>
                    <h2 className="section__title" key={newarticles.publishedAt}>{newarticles.title}</h2>
                        <img className="section__image" alt={newarticles.title}src={newarticles.urlToImage}/>  
                        <p className="section__text">{newarticles.description}</p>  
                </Fragment>}             
             </div>}
             </div>
        </Layout> 
    </React.Fragment>
    )
} 

export default Article;