import React from 'react'
import Button from '../Common/Button'
import imgBannerB from '../../assets/image/contentBannerB.png'
const ContentBannerB = () => {
  return (
    <div>
        <div className="contentBanner">
            <div className="imgBanner">
                <img src={imgBannerB} alt="" />
            </div>
            <div className="container">
                <div className="contentBanner-box">
                    <h2 className="contentBanner-box__subtitle">
                        LIMITED TO 2,000 PACKS
                    </h2>
                    <h1 className="contentBanner-box__title">
                        STANDARD
                        PACK
                    </h1>
                    <p>Contains five (5) original SPACE CYCLOP digital trading cards.</p>
                    <p> 
                        Common 56.13% 
                        <i class='bx bxs-circle'></i> Uncommon 25.86% 
                        <i class='bx bxs-circle'></i> Rare 11.07% 
                        <i class='bx bxs-circle'></i> Epic 5.24% 
                        <i class='bx bxs-circle'></i> Legendary 1.34% 
                        <i class='bx bxs-circle'></i> Special 0.32% 
                        <i class='bx bxs-circle'></i> Precious 0.04%
                    </p>
                    <h5 className="contentBanner-box__price">
                        $24.99 USD
                    </h5>
                    <Button value='shop now' styleClass='btn-primary-sm'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContentBannerB