import * as React from 'react'
import * as styles from './TeamX.module.css'
import Navbar from '../components/Navbar/Navbar'
import Slide from '../components/Slide'

const TeamX = ()=>{
    return(
        <div>
            <Navbar/>
            <div className={styles.contentContainer}>
            <Slide></Slide>
            </div>
        </div>
    )
}

export default TeamX