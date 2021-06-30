import { useContext, useState } from "react";
import { useEffect } from "react";
import AuthContext from "../stores/authContext";

const Guides = () => {
    const {user,authReady,login}=useContext(AuthContext);
    const [error,setError]=useState(AuthContext);
    const [guides,setGuides]=useState(AuthContext);

       useEffect(()=>{
           if(authReady){
                 fetch("/.netlify/functions/super-mario", user && {
                     headers:{
                        Authorization: 'Bearer '+ user.token.access_token
                     }
                 }).then(res=>{
                     if( !res.ok ){
                         login();
                        throw new Error('you mus be logged in to view the content');
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
              
       },[user,authReady,login]);

    return ( 
        <div>
  {!authReady && <div>Loading...</div>}

      {error && (
        <div >
          <p>{ error }</p>
        </div>
      )}

//       {guides && guides.map(guide => (
//         <div key={guide.title} >
//           <h3>{ guide.title }</h3>
//           <h4>written by {guide.author}</h4>
//           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At corrupti iste ab magnam dignissimos id maxime rerum quae minima. Delectus maxime culpa est consequatur veritatis, perspiciatis cum corrupti possimus quis?</p>
//         </div>
//       ))}
        </div>
    );
}
 
export default Guides;
