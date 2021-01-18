import React, {/*  useState,useEffect, */ Fragment } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
 import { GifGridItem } from './GifGridItem';

export const GifGrid=({category})=>{

   /*  const [images,setImages]=useState([]);

   

    */

     

   const {data:images,loading}= useFetchGifs( category );
  


   // getGifs();

    return (
        <Fragment>

        <h3>{ category }</h3>

        {loading && <p>Loading</p> } 

        
        <div className="car-grid animate__animated animate__bounce animate__flash">
            
            {
                     images.map(img=>(
                        <GifGridItem
                        key={img.id} 
                        {...img}
                        >

                        </GifGridItem>
                     ))
            }
             
            
        </div>
        </Fragment>
    )
}