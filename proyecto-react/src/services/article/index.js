import mockArticle from './mock.json';

const getNews = async () => {
    const data = await fetch ("https://newsapi.org/v2/everything?q=healthy&language=es&pageSize=4&apiKey=2331c8ce965f486da28a2da30a8d996e");
    const articles = await data.json();
    console.log(articles)
    return articles.articles
}


const newArticle = () => {
   return process.env.REACT_APP_MOCK === "true" ? mockArticle : getNews();
}
export default newArticle;