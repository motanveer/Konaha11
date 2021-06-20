import * as React from 'react'
import * as styles from './TeamX.module.css'
import Navbar from '../components/Navbar/Navbar'
import Slide from '../components/Slide/Slide'

import {useStaticQuery, graphql} from 'gatsby'


const TeamX = ()=>{
    const data = useStaticQuery(graphql`
    query  {
        allMdx {
          nodes {
            frontmatter {
              title
              members {
                description
                name
              }
            }
          }
        }
      }
      
`)
    console.log(data.allMdx.nodes[0].frontmatter.members[0])
    return(
        <div>
            <Navbar/>
            <div className={styles.contentContainer}>
                <Slide characterName={data.allMdx.nodes[0].frontmatter.members[0].name}/>
                <Slide direction="right"/>
                <Slide/>
            </div>
        </div>
    )
}

export default TeamX