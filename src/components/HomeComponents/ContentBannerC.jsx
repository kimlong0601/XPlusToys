import React from 'react'

import imgBannerC from '../../assets/image/contentBannerC.png'
import Button from './../Common/Button';

const ContentBannerC = () => {
  return (
    <div>
        <div className="contentBanner">
            <div className="imgBanner">
                <img src={imgBannerC} alt="" />
            </div>
            <div className="container">
                <div className="contentBanner-box">
                    <h2 className="contentBanner-box__subtitle">
                        LIMITED TO 1,000 PACKS
                    </h2>
                    <h1 className="contentBanner-box__title">
                        PREMIUM PACK
                    </h1>
                    <p>
                        Contains ten (10) original SPACE CYCLOP digital trading cards.
                    </p>
                    <p>
                        This is the only way to get some of these.
                    </p>
                    <p>
                        Common 47.10% 
                        <i class='bx bxs-circle'></i> Uncommon 29.64% 
                        <i class='bx bxs-circle'></i> Rare 14.13%
                        <i class='bx bxs-circle'></i> Epic 6.73%
                        <i class='bx bxs-circle'></i> Legendary 1.72%
                        <i class='bx bxs-circle'></i> Special 0.43%
                        <i class='bx bxs-circle'></i> Precious 0.05%
                        <i class='bx bxs-circle'></i> Premium 0.20%
                    </p>
                    <h5 className="contentBanner-box__price">
                        $9.99 USD
                    </h5>
                    <Button value='shop now' styleClass='btn-primary-sm'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContentBannerC