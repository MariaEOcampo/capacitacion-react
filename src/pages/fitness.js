import React,{useEffect, useState, Fragment} from 'react';
import '../pages/style-pages.scss';
import Layout from '../components/layout';
import newPhoto from '../services/fitness';
import Loader from 'react-loader-spinner';

const Fitness = () => {

const [photos,setPhotos] = useState([]);
const [loading,setLoading] =useState(true);

useEffect(() =>{
    newPhoto().then(res => {
        setPhotos(res)
        setLoading(false)    
    }); 
     
},[] )
console.log('hola')

/* const content = photosNew.map((data) => (
    <React.Fragment>
      <h2>{data.description}</h2>
    </React.Fragment>
  )); */

return(
    <React.Fragment>
        <Layout>
            <div>
            {<div className="section__container">
                {loading ? <div><Loader className="dots"/></div> : 
                <Fragment>
                  {/*   {content} */}
                </Fragment>}             
             </div>}
             </div>
        </Layout> 
    </React.Fragment>
    )
} 

export default Fitness;