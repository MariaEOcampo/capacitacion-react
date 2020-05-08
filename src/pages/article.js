import React,{useEffect, useState, Fragment} from 'react';
import '../pages/style-pages.scss';
import Layout from '../components/layout';
import newArticle from '../services/article';

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

/* const getNews = async () => {
    const data = await fetch ("https://newsapi.org/v2/everything?q=healthy&language=es&pageSize=4&apiKey=2331c8ce965f486da28a2da30a8d996e");
    const articles = await data.json();
    console.log(articles)
    setArticles(articles.articles)
    setLoading(false)
} */

const newarticles = articles[0]

return(
    <React.Fragment>
        <Layout>
            <div>
            {<div className="section">
                {loading ? <div> ...Loading</div> : 
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


/* const Recipes = () => {
    return(
    <React.Fragment>
        <Layout>
            <section className="section__container">
                <div className="section__item">
                    {
                        recipes.map( item =>{
                            return(
                                <div key={item.id}>
                                    <h3>{item.nombre}</h3>
                                    <img alt={item.alt} src={item.src}/>
                                    <p>{item.pasos}</p>

                                </div>
                            )
                        })
                    }

                </div>

            </section>
        </Layout> 
    </React.Fragment>
    )
}  */

export default Article;