import React,{useEffect, useState, Fragment} from 'react';
import '../pages/_pages.scss';
/* import recipes from '../data.json'; */
import Layout from '../components/layout';

const Article = () => {
const [articles,setArticles] = useState([]);
const [loading,setLoading] =useState(true);
useEffect(() =>{
    getNews();  
},[] )
const getNews = async () => {
    const data = await fetch ("https://newsapi.org/v2/everything?q=healthy&language=es&apiKey=2331c8ce965f486da28a2da30a8d996e");
    const articles = await data.json();
    console.log(articles)
    setArticles(articles.articles)
    setLoading(false)
}
const newarticles = articles[0]
return(
    <React.Fragment>
        <Layout>
            <div>
                {loading ? <div> ...Loading</div> : 
                <Fragment>

                <h2 key={newarticles.publishedAt}>
                    {newarticles.title}   
                </h2>
                <p>{newarticles.content}</p>
                <img src={newarticles.urlToImage}/>
                </Fragment>
                }
              
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