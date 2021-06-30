import Navbar from './nav'
import { AuthContextProvider } from '../stores/authContext';
const Layout = ({children}) => {
    return ( 
        <div className='main-container'>
        <AuthContextProvider>
            <Navbar/>
          {children }
        </AuthContextProvider>
        </div>
    );
}
 
export default Layout;