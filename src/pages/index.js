import * as React from "react"
import Navbar from '../components/Navbar/Navbar'
import * as styles from './Index.module.css'
import { StaticImage } from "gatsby-plugin-image"
import Icon from "../components/TeamIcon/Icon"
import {useStaticQuery, graphql} from 'gatsby'


const Home = () => {

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }  
`)
  return (
    <div className={styles.Container}>
      <Navbar />
      <div className={styles.selectBox}>
       <div className={styles.contentArea}>
       <h1>{data.site.siteMetadata.title}</h1>
       <p>
       </p>
       <div className={styles.iconContainer}>
         <Icon/>
         <Icon/>
         <Icon/>
         <Icon/>
       </div>
       </div>
      </div>
      <StaticImage className={styles.hero} src="../images/cover.png" alt="A dinosaur"
          placeholder="tracedSVG"
          layout="constrained" ></StaticImage>
    </div>
  )
}

export default Home