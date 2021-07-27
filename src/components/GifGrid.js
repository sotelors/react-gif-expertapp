import React from 'react'
//import React, {useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs'
import {GifGridItem} from './GifGridItem'


export const GifGrid = ( { category } ) => {

    
    // //const [count, setCount] = useState(0)
    // const [images, setImages] = useState([]);
    const { data:images, loading } =  useFetchGifs( category );

    // //disparar la instruccion solo una vez
    // useEffect( () => {
    //     //getGifs();
    //     getGifs( category )
    //         .then( setImages )
    // }, [ category ])

   
    
    //getGifs();

    return (
      <>
        <h3 className="animate__animated animate__fadeIn" >{category}</h3>
        {/* { loading ? 'Cargando...' : 'Data Cargada' } */}
        
        { loading && <p className="animate__animated animate__flash" >Loading</p> }

        <div className="card-grid">
                {
                    images.map((img) => (
                    <GifGridItem
                        key={img.id}
                        {...img}

                        // key = { img.id }
                        // img = { img }
                    />
                    ))
                }
            </div>

        {/* <div className="card-grid">

                    {
                        // images.map( img => (
                        //     <li key={img.id}> {img.title} </li>
                        // ))

                        // images.map( ( { id, title } ) => (
                        //     <li key={id}> {title} </li>
                        // ))

                        images.map( img => (
                            <GifGridItem 

                                key = { img.id }
                                { ...img }

                                // key = { img.id }
                                // img = { img }
                            />
                        ))

                    }
            </div> */}
      </>
    );
}
