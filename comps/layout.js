import Navbar from './nav'


const Layout = ({children}) => {
    return ( 
        <div>

         <Navbar/>
          {children }
        </div>
    );
}
 
export default Layout;