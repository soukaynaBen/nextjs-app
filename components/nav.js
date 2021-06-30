import  Link from 'next/link';
import Image from 'next/image'
import AuthContext from '../stores/authContext';
import { useContext } from 'react';

export default function  Nav () {

    const style={margin: "0 auto",
                };

    const {user,login,logout,authReady} = useContext(AuthContext);
       console.log(authReady,1);
    return ( 
     <div className="container">
         <nav>
            <Image  src="/rupee.png" width={50} height={48} alt="logo" />
                <h1 style={style}>Gaming Vibes</h1> {authReady && (
            <ul>
                <li><Link href="/home">Home</Link></li>
                <li><Link href="/guides">Guides</Link></li>
              {!user && <li style={{cursor:"pointer", border:"1px solid red",
                borderRadius:"5px"}} onClick={login} className="btn"> Login/signUp</li>}  
              {user && <li style={{cursor:"pointer", border:"1px solid red",
                borderRadius:"5px"}} onClick={logout} className="btn"> Logout</li> } 
            </ul> )}
         </nav>
         <div className="banner">
            <Image src="/claudio-luiz-castro-_R95VMWyn7A-unsplash.jpg" width={966} height={276} alt="image banner"/>
         </div>
     </div>
     );
}
 
