import React from 'react'
import * as styles from './Slide.module.scss'
import { StaticImage} from "gatsby-plugin-image"
import Img from 'gatsby-image'
export default function Slide(props) {

   
    console.log(props.index)
    const determineAlignment = () =>
    {
        if(props.index %2 == 0){
            return styles.WrapperR
        }
        else{
            return styles.Wrapper
        }
    } 
    
    return (
        <div className={determineAlignment()}>
            <Img className={styles.characterImage} fluid={props.image}/>
            <div className={styles.characterInfo}>
                <p className={styles.characterName}>{props.name}</p>
                <p className={styles.characterBio}>{props.bio}</p>
            </div>
        </div>
    )

    
}
