import React,{useEffect, useState, Fragment} from 'react';
import '../pages/style-pages.scss';
import Layout from '../components/layout';
import getPhoto from '../services/fitness';
import Loader from 'react-loader-spinner';

const Fitness = () => {

const [photos,setPhotos] = useState([]);
const [loading,setLoading] =useState(true);

useEffect(() =>{
    getPhoto().then(res => {
        setPhotos(res)
        setLoading(false)
    }); 
     
},[] )

console.log(photos)


return(
    <React.Fragment>
        <Layout>
            <div>
            {<div className="section__container">
                {loading ? <div><Loader className="dots"/></div> : 
                <Fragment>
                    <h1 className="fitness-title">Inspirate con estas cuentas de Instagram para tus rutinas</h1>
                     {  
                         <div>
                             {photos.map((data)=>
                             <div className="photo-container">
                             <img className="photo-fitness" key={data.exif.id} 
                             src={data.urls.small} 
                             alt={data.alt_description}/>
                             <figcaption className="section__figcaption--fitness">
                            <span className="footer__icon"><i class="fab fa-instagram">
                            </i></span>{data.user.instagram_username}</figcaption>                      
                             </div>)
                             }
                         </div>
                     }
                </Fragment>}             
             </div>}
             </div>
        </Layout> 
    </React.Fragment>
    )
} 

export default Fitness;