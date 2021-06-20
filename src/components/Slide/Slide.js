import React from 'react'
import * as styles from './Slide.module.scss'
import { StaticImage} from "gatsby-plugin-image"
import Img from 'gatsby-image'
export default function Slide(props) {

    if(props.direction == 'right'){
        return (
            <div className={styles.WrapperR}>
                <StaticImage className={styles.characterImageR} src="../../images/shikamaru.png" height={600}  layout="fixed" placeholder="tracedSVG" />
                <div className={styles.characterInfoR}>
                    <p className={styles.characterName}>Shikamaru Nara</p>
                    <p className={styles.characterBio}>
                    Shikamaru Nara (奈良シカマル, Nara Shikamaru) is a shinobi of Konohagakure's Nara clan. Though lazy by nature, Shikamaru has a rare intellect that consistently allows him to prevail in combat. 
                    </p>
                </div>
            </div>
        )
    }

    console.log(props.image)
    return (
        <div className={styles.Wrapper}>
            <Img className={styles.characterImage} fluid={props.image}/>
            <div className={styles.characterInfo}>
                <p className={styles.characterName}>{props.characterName}</p>
                <p className={styles.characterBio}>{props.characterBio}</p>
            </div>
        </div>
    )
}

// <StaticImage className={styles.characterImage} src={props.imagePath}  height={600} layout="fixed" placeholder="tracedSVG"/>

