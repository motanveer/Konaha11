import * as React from 'react'
import * as styles from './TeamX.module.css'
import Navbar from '../components/Navbar/Navbar'
import Slide from '../components/Slide/Slide'
import Img from 'gatsby-image'

import {useStaticQuery, graphql} from 'gatsby'


const TeamX = ()=>{
    const data  = useStaticQuery(graphql`
    query MyQuery {
        allMdx {
          nodes {
            frontmatter {
              title
              members {
                name
                description
                image {
                  childImageSharp {
                    fluid(maxWidth: 600) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
            }
          }
        }
      }
      
      
`)
    //console.log(data.allMdx.nodes[0].frontmatter)  
    //console.log(data.allMdx.nodes[0].frontmatter.members[0])
    console.log(data.allMdx.nodes[0].frontmatter.members[0].image.childImageSharp.fluid)
    const image = data.allMdx.nodes[0].frontmatter.members[0].image.childImageSharp.fluid
    return(
        <div>
            <Navbar/>
            <Slide 
            characterName={data.allMdx.nodes[0].frontmatter.members[0].name} 
            characterBio= {data.allMdx.nodes[0].frontmatter.members[0].description}
            image = {image}
            />
            
        </div>
    )
}

export default TeamX

/*
<Navbar/>
            <div className={styles.contentContainer}>
               // <Slide characterName={data.allMdx.nodes[0].frontmatter.members[0].name}/>
                //<Slide direction="right"/>
               // <Slide/>
            </div>
*/

//<Img fixed={data.allMdx.nodes[0].frontmatter.members[0].image.childImageSharp.fixed}/>