import  Link from 'next/link';
import Image from 'next/image'
import AuthContext from '../stores/authContext';
import { useContext } from 'react';

export default function  Nav () {

    const style={margin: "0 auto",
                border:"1px solid red"
                };

    const {user,login,logout} = useContext(AuthContext);
      console.log(user);
    return ( 
     <div className="container">
         <nav>
            <Image  src="/rupee.png" width={50} height={48} alt="logo" />
                <h1 style={style}>Gaming Vibes</h1>
            <ul>
                <li><Link href="/home">Home</Link></li>
                <li><Link href="/guides">Guides</Link></li>
                <li style={{cursor:"pointer"}} onClick={login} className="btn"> Login/signUp</li>
                <li style={{cursor:"pointer"}} onClick={logout} className="btn"> Logout</li>
            </ul>
         </nav>
         <div className="banner">
            <Image src="/claudio-luiz-castro-_R95VMWyn7A-unsplash.jpg" width={966} height={276} alt="image banner"/>
         </div>
     </div>
     );
}
 
