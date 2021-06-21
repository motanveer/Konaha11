/*
===============================
This file serves as the template component to dynamically generate pages from MDX files.
1. Data from the MDX files is queries via GraphQL, and then exported
2. This data is then accessed via the data variable
3. We can now filter the data and then render the need components-- sending props as needed.
===============================
*/

import * as React from 'react'
import * as styles from './TeamX.module.css'
import Navbar from '../components/Navbar/Navbar'
import Slide from '../components/Slide/Slide'
import {graphql} from 'gatsby'


const TeamX = ({data})=>{

//Filter the result of the graphQL query to access the relevant data:
const teamData = data.allMdx.nodes[0].frontmatter;
console.log(teamData.members)

//Create Slide components for each item in the array:
const teamMembers = teamData.members.map((character, index) => 
  <Slide key={index + 1} index={index +1 } name={character.name} bio={character.bio} image={character.image.childImageSharp.fluid}/>)

    return(
        <div>
            <Navbar/>
            {teamMembers}
        </div>
    )
}

export default TeamX


//GraphQL Query to get the needed data:

//This query makes use of the context variable, slug, defined in 'gatsby-node.js to make a dynamic query
export  const query  = graphql`
query($slug: String) {
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