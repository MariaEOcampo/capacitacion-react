/* import mockDate from '../date/mockDate.json' */
import { dateApi } from '../../config';

const getDate = async () => {
    const res = await fetch(`${dateApi.URL}?by=${dateApi.BY}&zone=${dateApi.ZONE}&format=${dateApi.FORMAT}&key=${dateApi.API_KEY}`);
    const data = await res.json();
    return data;
}

/* const newArticle = () => {
   return process.env.REACT_APP_MOCK === "true" ? mockArticle : getNews();
} */
export default getDate;