import React from 'react';
import '../pages/_pages.scss';
import recipes from '../data.json';
import Layout from '../components/layout';


const Recipes = () => {
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
} 

export default Recipes;