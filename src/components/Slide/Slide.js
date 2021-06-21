import React from 'react'
import * as styles from './Slide.module.scss'
import Img from 'gatsby-image' //Deprecated
export default function Slide(props) {

   
    
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
