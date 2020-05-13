import mockArticle from './mock.json';
import { noticeApi } from '../../config';

const getNews = async () => {
    const data = await fetch (`${noticeApi.URL_1}q=${noticeApi.Q}&language=${noticeApi.LANGUAGE}&pagesize=${noticeApi.PAGES}&apiKey=${noticeApi.API_KEY}`);
    const articles = await data.json();
    console.log(articles)
    return articles.articles
}

const newArticle = () => {
   return process.env.REACT_APP_MOCK === "true" ? mockArticle : getNews();
}
export default newArticle;