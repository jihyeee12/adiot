import React, { Component } from 'react';
import Portfolio from '../portfolio/portfolio';
import Location from '../location/location'
import styles from './identity.module.css';

class Identity extends Component {
    render() {
        return (
            <>
            <div className={styles.identity}>
                <h4 className={styles.identityImg}>
                    <span className={styles.company}>ADIoT</span><br></br>                   
                    IDENTITY
                </h4>
                <div className={styles.identityZone}>
                    <div className={styles.indentityText}>
                        <img src="/img/icon/adventure.png" alt="adventure" />
                        <h4 className={styles.Title}><span className={styles.important}>A</span>dventure</h4>
                        <p className={styles.text}>현대사회의 가치 있는 기술발전을 위해 모험적인 도전을 두려워하지 않습니다.</p>
                    </div>
                    <div className={styles.indentityText}>
                        <img src="/img/icon/development.png" alt="development" />
                        <h4 className={styles.Title}><span className={styles.important}>D</span>evelopment</h4>
                        <p className={styles.text}>프로젝트의 본질과 과업의 핵심을 놓치지 않으며 체계적인 개발을 구현합니다.</p>
                    </div>
                    <div className={styles.indentityText}>
                        <img src="/img/icon/innovation.png" alt="innovation" />
                        <h4 className={styles.Title}><span className={styles.important}>I</span>nnovation</h4>
                        <p className={styles.text}>창의적이고 긍정적인 생각을 공유함으로써 혁신적인 결과를 이루어냅니다.</p>
                    </div>
                    <div className={styles.indentityText}>
                        <img src="/img/icon/originality.png" alt="originality" />
                        <h4 className={styles.Title}><span className={styles.important}>O</span>riginality</h4>
                        <p className={styles.text}>변화하는 디지털 환경에 최적화된 솔루션으로 고유한 스타일을 만들어냅니다.</p>
                    </div>
                    <div className={styles.indentityText}>
                        <img src="/img/icon/trust.png" alt="trust" />
                        <h4 className={styles.Title}><span className={styles.important}>T</span>rust</h4>
                        <p className={styles.text}> 비즈니스 관계 이전 신뢰와 믿음을 얻어 파트너가 되기 위해 최선을 다합니다.</p>
                    </div>
                </div>
            </div>
            <div className={styles.service}>
                <div className={styles.serviceCard}>
                    <div className={styles.serviceIcon1}>
                        <img className={styles.itImg} src="/img/icon/it.png" alt="it" />
                        <p className={styles.itText}>IT Solution</p>
                    </div>
                    <div className={styles.serviceIcon2}>
                        <img className={styles.itImg} src="/img/icon/ux.png" alt="ux" />
                        <p className={styles.itText}>UX·UI Design</p>
                    </div>
                    <div className={styles.serviceIcon3}>
                        <img className={styles.itImg} src="/img/icon/iot.png" alt="iot" />
                        <p className={styles.itText}>IoT Tech Development</p>
                    </div>
                </div>
                <div className={styles.serviceContent}>
                    <h2 className={styles.serviceTitle}><span className={styles.company}>ADIoT</span><br></br>SERVICE</h2>
                    <p className={styles.serviceText}>㈜에이디오트는 모험적인 연구 개발을 통해 혁신적, 독창적인 결과를 도출하고
                        기업간의 신뢰를 중요시하는 IT 기업입니다. 에이디오트를 찾아주신 고객사의 아이디어에
                        귀 기울이고 다양한 경험, 전문지식을 바탕으로 효과적인 실행방안을 제안해드립니다.
                    </p>
                </div>
            </div>
            <div className={styles.workframe}>
                <h3 className={styles.frameTitle}>WORK FRAME</h3>
                <img className={styles.frameImg} src="/img/workframe.png" alt="workframe" />
            </div>
            <Portfolio/>
            <Location/>
        </>
        );
    }
}

export default Identity;