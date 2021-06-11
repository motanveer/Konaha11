import React, { Component } from 'react'
import * as styles from './Navbar.module.css'
import Logo from '../../../assets/logo.svg'
import Burger from '../../../assets/burger.svg'


const cool = styles.CContainer

export class Navbar extends Component {
    render() {
        return (
            <div className={styles.Open}>
                
                <Burger className={styles.Hidden}/>


                <Logo className={styles.Logo}></Logo>
                <Burger onClick={fuck} className={styles.Burger}/>
            </div>
        )
    }

}

const fuck = ()=>{
        console.log(cool)
}

export default Navbar
