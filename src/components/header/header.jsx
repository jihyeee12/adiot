import React, { Component } from 'react';
import styles from './header.module.css';

class Header extends Component {
    render() {
        return (
            <>
                <div className={styles.headerBack}>
                    <img className={styles.home} src="/img/logo.png" alt="logo" />
                    <div className={styles.headerDiv}>
                        <div className={styles.left}>
                            <img className={styles.logoText} src="/img/adiotText.png" alt="adiot" />
                        </div>
                        <div className={styles.right}>
                            <img  className={styles.moveLogo}src="/img/adiotLogo.png" alt="adiotLogo" />
                        </div>
                    </div>
                </div>
            </>
            
        );
    }
}

export default Header;