import React from 'react';
import styles from './portfolio.module.css';
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import { useMediaQuery } from 'react-responsive';

    const Portfolio = () => {
        const isMobile = useMediaQuery({
            query: '(max-width: 480px)'
        });

        const settings = {
            dots: true,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500
        };
        const mobilSetting ={
            dots: true,
            className: "one",
            centerMode: true,
            infinite: true,
            centerPadding: "5px",
            slidesToShow: 1,
            speed: 500
        }

        return (
            <>
                <h3 className={styles.title}>PORTFOLIO</h3>
                <Slider 
                {...isMobile? {...mobilSetting} : {...settings}}
                
                >
                    <div className={styles.Portfolio}>
                        <img className={styles.portImg} src="/img/portfolio/test.png" alt="portfolio" />
                        <div className={styles.textZone}>
                            <h3 className={styles.portTitle}>시험지 생성 프로그램</h3>
                            <p className={styles.portText}>
                                시험지 생성 프로그램은 프로그램 내에서 문제를 만들어 서버에 저장하면 문제 은행이 구축됩니다.
                                이후 사용자가 시험지를 제작할 시 구축된 문제 은행을 통해 시험지를 손쉽게 만들 수 있습니다.
                            </p>
                        </div>
                    </div>
                    <div className={styles.Portfolio}>
                        <img className={styles.portImg} src="/img/portfolio/hotel.png" alt="portfolio" />
                        <div className={styles.textZone}>
                            <h3 className={styles.portTitle}>호텔 예약 앱 · 웹</h3>
                            <p className={styles.portText}>
                                객실 예약, 객실 내의 상품 구매뿐만 아니라 원하는 객실을 장바구니에 담아 결제하는 장바구니 시스템, 
                                지인에게 객실 이용권을 선물할 수 있는 객실 선물하기 기능 등 타사와는 차별화된 고객 지향 애플리케이션을 개발하였습니다.
                            </p>
                        </div>
                    </div>
                    <div className={styles.Portfolio}>
                        <img className={styles.portImg} src="/img/portfolio/serving.png" alt="portfolio" />
                        <div className={styles.textZone}>
                            <h3 className={styles.portTitle}>서빙 로봇 호출 프로그램</h3>
                            <p className={styles.portText}>
                                서빙로봇 하용자의 편의를 위해 호출 벨 누를 시 서빙 로봇이 인식해 벨을 누른 테이블로 이동하여 서비스를 제공해드리는
                                서빙 로봇 호출 프로그램 프로젝트에 참여하였습니다.
                            </p>
                        </div>
                    </div>
                    <div className={styles.Portfolio}>
                        <img className={styles.portImg} src="/img/portfolio/mail.png" alt="portfolio" />
                        <div className={styles.textZone}>
                            <h3 className={styles.portTitle}>문자 대량 발송 웹</h3>
                            <p className={styles.portText}>
                                대량문자를 발송하는데 잇어서 기본적 기능을 지니고 있는 것 이외 가격의 합리화, 비용처리 업무 간편화 등
                                문자 대량 발송 시스템을 사용하는 고객 편의에 중점을 맞춰 개발하였습니다.
                            </p>
                        </div>
                    </div>
                    <div className={styles.Portfolio}>
                        <img className={styles.portImg} src="/img/portfolio/shopping.png" alt="portfolio" />
                        <div className={styles.textZone}>
                            <h3 className={styles.portTitle}>쇼핑몰 앱 · 웹</h3>
                            <p className={styles.portText}>
                                앱/웹에서 판매하고 있는 상품을 직접 보고 체험할 수 있도록 상품이 사용되고 있는 매장이나 구역의 위치를
                                알려주는 상품 위치 정보 시스템이 들어간 도매 · 소매 애플리케이션을 개발하였습니다.
                            </p>
                        </div>
                    </div>
                    <div className={styles.Portfolio}>
                        <img className={styles.portImg} src="/img/portfolio/sense.png" alt="portfolio" />
                        <div className={styles.textZone}>
                            <h3 className={styles.portTitle}>장애물 감지 앱</h3>
                            <p className={styles.portText}>
                                스마트폰에 집중하며 이동하는 습관은 장애물, 주변 환경 등에 의해 자칫 스마트폰 사용자에게 상해를 입힐 수 있는
                                가능성이 있습니다. 사전에 이러한 사고를 방지하고자 장애물 감지 애플리케이션을 개발하였습니다.
                            </p>
                        </div>
                    </div>
                    </Slider>
            </>
        );
}

export default Portfolio;

