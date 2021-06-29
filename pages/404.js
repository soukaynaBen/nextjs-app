import { useEffect } from "react";
import {useRouter} from 'next/router'

const NotFound = () => {
    const router=useRouter();
    useEffect(  ()=>{

          setTimeout(() => {
              router.push('/');
          }, 3000);
    }
        ,[router])
    return ( <div>
        Ooops page not found !!!
    </div> );
}
 
export default NotFound;