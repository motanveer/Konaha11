import React, { Component, useState } from 'react'
import * as styles from './Navbar.module.css'
import Logo from '../../../assets/logo.svg'
import Burger from '../../../assets/burger.svg'
import { Link } from 'gatsby'


const Navbar = (props) => {

    const [vis, setVis] = useState(true);

    const toggleVis = () => {
        setVis(!vis);
    }

    if (!vis) {
        return (
            <div> 
                <div className={styles.CContainer}>

                    <Burger className={styles.Hidden} />
                    <Logo className={styles.Logo}></Logo>
                    <Burger onClick={toggleVis} className={styles.Burger} />
                </div>
                <div className={styles.Open}>
                <h1 className={styles.h1}>
                    <Link className={styles.h1} to="/">Home</Link><br/><br/>
                    <Link className={styles.h1} to="/">Team 10</Link>
                </h1>

                </div>
            </div>

        )
    }
    else {
        return (
            <div className={styles.CContainer}>

                <Burger className={styles.Hidden} />
                <Logo className={styles.Logo}></Logo>
                <Burger onClick={toggleVis} className={styles.Burger} />

            </div>

        )
    }
}

export default Navbar
