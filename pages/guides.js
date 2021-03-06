import { useContext, useState } from "react";
import { useEffect } from "react";
import AuthContext from "../stores/authContext";
 export default function Guides  ()  {
    const [error,setError]=useState(null);
    const [guides,setGuides]=useState(null);
    const {user,authReady} = useContext(AuthContext);

       useEffect(()=>{
           console.log(authReady);
           if(authReady){
                 fetch("/.netlify/functions/guides", user && {
                     headers:{
                        Authorization: 'Bearer '+ user.token.access_token
                     }
                 }).then(res=>{
                     console.log(res);
                     if( !res.ok ){
                        throw Error('you must be logged in to view the content');
                     }
                    return res.json();
                 }).then(data => {
                      setError(null);
                      setGuides(data);
                }).catch(err => {
                      setError(err.message);
                      setGuides(null);
                 })
           }
              
       },[user,authReady]);

   return ( 
       <div>
   {!authReady && <div>Loading...</div>}
      {error && (
        <div >
          <p>{ error }</p>
        </div>
      )
      }
    
    {
         guides && guides.map(guide => (
        <div key={guide.title} >
          <h3>{ guide.title }</h3>
          <h4>written by {guide.author}</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At corrupti iste ab magnam dignissimos id maxime rerum quae minima. Delectus maxime culpa est consequatur veritatis, perspiciatis cum corrupti possimus quis?</p>
        </div>
      ))}
        </div>
  );
}
 
