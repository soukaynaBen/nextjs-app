import Navbar from './nav'


const Layout = ({children}) => {
    return ( 
        <div className='main-container'>

         <Navbar/>
          {children }
        </div>
    );
}
 
export default Layout;