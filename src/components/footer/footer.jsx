import React, { Component } from 'react';
import styles from './footer.module.css';

class Footer extends Component {
    render() {
        const value = "adiot123@adiot.co.kr"
        
        return (
            <>
                <div className={styles.footer}>
                    <h3>CONTACT US</h3>
                    <p className={styles.footerText}>다양한 제휴 제안을 간략한 내용과 함께 아래 메일로 보내주시면
                        확인 후 영업일 기준 2-3일 내로 연락드리겠습니다.
                    </p>
                    <input className={styles.email} type="text" value={value} readOnly/>
                    <p className={styles.footerLogo}>ⓒ 2021 ADIOT All rights reserved</p>
                </div>
            </>
        );
    }
}

export default Footer;