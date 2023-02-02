import React, { useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import RedeemIcon from '../../assets/image/redeemIcon.png'
import CloseIcon from '../../assets/image/closeIcon.png'


const Timeline = () => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);

  return (
    <div className="timeline">
        
        <div className="container">
            <div className="content">
                <div className="container">
                    <div className="content-container">
                        <div className="content-box">
                            <h2 className="content-box__heading__small">MARK YOUR CALENDARS</h2>
                            <h1 className="content-box__heading__large">TIMELINE</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="timeline-container">
                <Swiper
                    modules={[Navigation, Pagination]}
                    onInit={(swiper) => {
                      swiper.params.navigation.prevEl = prevRef.current;
                      swiper.params.navigation.nextEl = nextRef.current;
                      swiper.navigation.init();
                      swiper.navigation.update();
                    }}
                >
                    <SwiperSlide>
                        <div className="timeline-box">
                            <div className="timeline-box__icon">
                                <img src={RedeemIcon} alt="" />
                            </div>
                            <div className="timeline-box__content">
                                <h1>REDEMPTIONS BEGIN</h1>
                                <p>
                                    Anyone holding a qualifiying SPACE CYCLOP card can redeem it for the the corresponding soft vinul figurine or acrylic trading card.
                                </p>
                                <p>
                                    Redmptions will only be open for 30 days directly from <a href="#">xplus-toys.nft.com/redeem</a>
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="timeline-box">
                            <div className="timeline-box__icon">
                                <img src={CloseIcon} alt="" />
                            </div>
                            <div className="timeline-box__content">
                                <h1>REDEMPTIONS close</h1>
                                <p>
                                Redmptions for SPACE CYCLOP soft vinyl figurines and acrylic trading cards close on August 26 at 12AM PST. No claims for physical redemptions will be offered after this period.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="timeline-box">
                            <div className="timeline-box__icon">
                                <img src={CloseIcon} alt="" />
                            </div>
                            <div className="timeline-box__content">
                                <h1>MOBILE APPLICATION</h1>
                                <p>
                                    X PLUS is hard at work on a new mobile application that will allow you to enjoy new ways of interacting with your X PLUS TOYS NFTs.
                                </p>
                                <p>
                                    You'll be able to view your models both in 3D and with AR (augmented reality) on supported devices.
                                </p>
                                <p><h>Its release is planned for Q4 2022 on iOS and Android.</h></p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <div className="TimlineBtn">
                        <div ref={prevRef} className="PrevButton"><i class='bx bx-left-arrow-alt'></i></div>
                        <div ref={nextRef} className="NextButton"><i class='bx bx-right-arrow-alt' ></i></div>
                    </div>
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Timeline