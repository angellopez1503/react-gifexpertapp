import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs=( category )=>{

    const [state,setState]=useState({
        data:[],
        loading:true
    });

    useEffect(()=>{

        getGifs(category)
                .then(imgs=>{
           //          setTimeout(() => {
                        console.log(imgs);
                        setState({
                            loading:false,
                            data:imgs
                        });
             //       }, 2000);
                })

    },[category]);

    // setTimeout(() => {
    //     setState({loading:false,data:[1,2,3,4,5,6,7]});
    // }, 3000);

    return state; //{data:[],loading:true}
}