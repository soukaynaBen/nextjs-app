import Navbar from './nav'
import { AuthContextProvider } from '../stores/authContext';
const Layout = ({children}) => {
    return ( 
        <div className='main-container'>
        <AuthContextProvider>
            <Navbar/>
        </AuthContextProvider>
          {children }
        </div>
    );
}
 
export default Layout;