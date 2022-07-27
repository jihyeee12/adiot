import React from 'react';
import styles from './location.module.css';
import Map from './map';

const location = () => (
                <>
            <div className={styles.location}>
                <h3 className={styles.locationTitle}>LOCATION</h3>
                <div className={styles.maps}>
                    <Map />
                </div>
                <div className={styles.company}>
                    <div className={styles.companyInfo}>
                        <h4>INFO.</h4>
                        <div>
                            <p className={styles.title}>EMAIL</p>
                            <p className={styles.text}>adiot123@adiot.co.kr</p>
                            <p className={styles.title}>WEBSITE</p>
                            <p className={styles.text}>www.adiot.co.kr</p>
                        </div>
                    </div>
                    <div className={styles.companyInfo}>
                        <h4>TEL.</h4>
                        <div>
                            <p className={styles.title}>대표번호</p>
                            <p className={styles.text}>062-975-0110</p>
                            <p className={styles.title}>팩스번호</p>
                            <p className={styles.text}>062-975-0415</p>
                        </div>
                    </div>
                    <div className={styles.companyInfo}>
                        <h4>ADD.</h4>
                        <div>
                            <p className={styles.text}>광주 북구 오룡동 1110-43<br></br>
                                와이어스파크 B동 2201호
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </>
    );

export default location;