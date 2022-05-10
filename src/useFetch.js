import { useState,useEffect } from 'react';

const useFetch = (url) =>{

    const [data, setData] = useState(null);
const[isPending, setIsPending] = useState(true);
const[error, setError] = useState(null);

    useEffect(() =>{
        //console.log('Use effect running') ;
        //console.log(blogs);
        setTimeout(() =>{
         fetch(url)
         .then(res =>{
           if(!res.ok){
             throw Error("Could not fetch the data...")
           }
        return res.json();
         })
         .then(data =>{
           //console.log(data)
           setData(data);
           setIsPending(false);
           setError(null)
         })
         .catch(err =>{
           setError(err.message)
           setIsPending(false)
           setData(null)
         })
        },1000)
       
        
       },[])

       return {data,isPending,error}
}

export default useFetch;