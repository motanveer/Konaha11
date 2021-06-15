import * as React from "react"
import Navbar from '../components/Navbar/Navbar'
import * as styles from './Index.module.css'
import 'animate.css'



const Home = () =>{
 return(
  <div className={styles.Container}>
    <Navbar/>
  </div>
 )
}

export default Home