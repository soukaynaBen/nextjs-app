import Layout from '../components/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
   
   <Layout children={ <Component {...pageProps} />}/>
  )
}

export default MyApp
