import React from 'react';
import imgBannerA from '../../assets/image/contentBannerA.png';
import Button from './../Common/Button';

const ContentBannerA = () => {
  return (
    <div>
        <div className="contentBanner">
            <div className="imgBanner">
                <img src={imgBannerA} alt="" />
            </div>
            <div className="container">
                <div className="contentBanner-box">
                    <h2 className="contentBanner-box__subtitle">
                        CATCH THEM ALL
                    </h2>
                    <h1 className="contentBanner-box__title">
                        6 SPACE
                        CYCLOP
                    </h1>
                    <p>
                        Six different Space Cyclop, Pinky, Jungle, Deep Sea, Corny, Toxic and Rainbow. will be featured in this set.
                    </p>
                    <p>
                        Avid collectors familiar with the loveable Space Cyclop can vie for different colored cards, monster poses, motion effects and holographic finishes.
                    </p>
                    <Button value='Shop now' styleClass='btn-primary-sm'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContentBannerA