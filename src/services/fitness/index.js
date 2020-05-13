import mockArticle from '../article/mock.json';
import { photoApi } from '../../config';

const getPhoto = async () => {
    const data = await fetch (`${photoApi.URL_1}?query=${photoApi.Q}&count=${photoApi.COUNT}&client_id=${photoApi.CLIENTE_ID}`);
    const photos = await data.json();
    console.log(photos)
    return photos.photos
}

const newPhoto = () => {
    return process.env.REACT_APP_MOCK === "true" ? mockArticle : getPhoto();
 }
export default newPhoto;

/* https://api.unsplash.com/photos/random/?query=london&count=2&client_id=NC_dscY3bR9nL1VSvDMRJtUX63fBkdHTI83D7CPYIdw */