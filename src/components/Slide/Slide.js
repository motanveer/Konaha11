import React from 'react'
import * as styles from './Slide.module.scss'
import Img from 'gatsby-image' //Deprecated

import {GatsbyImage } from 'gatsby-plugin-image'


export default function Slide(props) {    
    
        if(props.index %2 == 0){
            return (
                <div style={{backgroundColor: props.color}} className={styles.WrapperR}>
                    <GatsbyImage className={styles.characterImageR} image={props.image}/>
                    <div className={styles.characterInfoR}>
                        <p className={styles.characterNameR}>{props.name}</p>
                        <p className={styles.characterBio}>{props.bio}</p>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div style={{backgroundColor: props.color}}  className={styles.Wrapper}>
                    <GatsbyImage className={styles.characterImage} image={props.image}/>
                    <div className={styles.characterInfo}>
                        <p className={styles.characterName}>{props.name}</p>
                        <p className={styles.characterBio}>{props.bio}</p>
                    </div>
                </div>
            )
    } 

}
