import { photoApi } from '../../config';

const getPhoto = async () => {
    const data = await fetch (`${photoApi.URL_1}query=${photoApi.Q}&count=${photoApi.COUNT}&client_id=${photoApi.CLIENTE_ID}`);
    const photos = await data.json();
    return photos
}

export default getPhoto;

/* https://api.unsplash.com/photos/random/?query=london&count=2&client_id=NC_dscY3bR9nL1VSvDMRJtUX63fBkdHTI83D7CPYIdw */


