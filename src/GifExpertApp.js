

import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball' ]

     //const [categories, setcategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball' ])
     //const [categories, setcategories] = useState([ 'One Punch' ])
     const [categories, setcategories] = useState([ 'One Punch' ])

    // const handleAdd = () => {
    //   //setcategories([...categories,  'HunterXHunter']); 
    //   setcategories ( cats => [ ...cats, 'HunterXHunter' ] )
    // }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories={setcategories} />
            <hr/>

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
               { 
               
            //    categories.map(  (category ) =>{
            //        return <li key={ category } >  {category} </li>
            //    }) 
                
                categories.map( category => (
                    <GifGrid 
                        category = { category } 
                        key = {category}
                    
                    />
                ))
            
               
               }
            </ol>

        </div>
    )
}
