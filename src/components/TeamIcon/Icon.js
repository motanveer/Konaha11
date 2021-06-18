import React from 'react'
import * as styles from './Icon.module.css'
import { StaticImage } from 'gatsby-plugin-image'
import s from '../../images/guy.png'

export default function Icon() {
    return (
        <div className={styles.Container}>
          <StaticImage className={styles.imageContainer} layout="fullWidth" src="../../images/guy.png"></StaticImage>
                <p className = {styles.teamLabel}>Team Guy</p>
        </div>
    )
}
