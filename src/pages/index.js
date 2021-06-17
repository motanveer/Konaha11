import * as React from "react"
import Navbar from '../components/Navbar/Navbar'
import * as styles from './Index.module.css'
import { StaticImage } from "gatsby-plugin-image"



const Home = () => {
  return (
    <div className={styles.Container}>
      <Navbar />
      <div className={styles.selectBox}>
      </div>
      <StaticImage className={styles.hero} src="../images/cover.png" alt="A dinosaur"
          placeholder="lazy"
          layout="constrained" ></StaticImage>
    </div>
  )
}

export default Home