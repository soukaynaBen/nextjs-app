import  Link from 'next/link';
import Image from 'next/image'

export default function  Nav () {
    const style={margin: "0 auto",
                border:"1px solid red"
                };
    return ( 
     <div className="container">
         <nav>
            <Image  src="/rupee.png" width={50} height={48} alt="logo" />
                <h1 style={style}>Gaming Vibes</h1>
            <ul>
                <li><Link href="/home">Home</Link></li>
                <li><Link href="/guides">Guides</Link></li>
            </ul>
         </nav>
         <div className="banner">
            <Image src="/claudio-luiz-castro-_R95VMWyn7A-unsplash.jpg" width={966} height={276} alt="image banner"/>
         </div>
     </div>
     );
}
 
