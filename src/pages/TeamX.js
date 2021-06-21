import * as React from 'react'
import * as styles from './TeamX.module.css'
import Navbar from '../components/Navbar/Navbar'
import Slide from '../components/Slide/Slide'
import Img from 'gatsby-image'

import {useStaticQuery, graphql} from 'gatsby'


const TeamX = ({data})=>{

//Filter the result of the graphQL query to access the relevant data:
const teamData = data.allMdx.nodes[0].frontmatter;
console.log(teamData.members)

const teamMebers = teamData.members.map((character, index) => 
  <Slide key={index + 1} index={index +1 } name={character.name} bio={character.bio} image={character.image.childImageSharp.fluid}/>
)

    return(
        <div>
            <Navbar/>
            {teamMebers}
            
        </div>
    )
}

export default TeamX

export  const query  = graphql`
query($slug: String!) {
  allMdx(filter: {slug: {eq: $slug}}) {
    nodes {
      frontmatter {
        title
        members {
          bio
          name
          image {
            childImageSharp {
              fluid(maxWidth: 660){
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
}     
`