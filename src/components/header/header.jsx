import React, { Component } from 'react';
import styles from './header.module.css';

class Header extends Component {
    render() {
        return (
            <>
                <div className={styles.headerBack}>
                    <img className={styles.home} src="/img/logo.png" alt="logo" />
                    <div className={styles.headerDiv}>
                        <img className={styles.logoText} src="/img/adiotText.png" alt="adiot" />
                        <img  className={styles.moveLogo}src="/img/adiotLogo.png" alt="adiotLogo" />
                    </div>
                </div>
            </>
            
        );
    }
}

export default Header;