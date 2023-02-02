import React from 'react'
import Button from '../Common/Button';

const Content = () => {
  return (
    <div className="content">
        <div className="container">
            <div className="content-container">
                <div className="content-box">
                    <h2 className="content-box__heading__small">THE DEBUT X PLUS NFT COLLECTION</h2>
                    <h1 className="content-box__heading__large">IT'S OUT OF THIS WORLD</h1>
                    <p>The debut digital collectibles launch stars X PLUS’s original fictional character SPACE CYCLOP, a mysterious kaiju mascot that crash landed in the streets of Tokyo years ago.</p>
                    <p>Avid collectors familiar with the lovable SPACE CYCLOP can vie for different colored cards, monster poses, motion effects and holographic finishes, craftable and redeemable cards.</p>
                    <p>
                        <strong>Limited to 3,000 packs!</strong>
                    </p>
                    <Button value='Buy Now' styleClass='btn-primary-sm'/>
                </div>
                <div className="content-box">
                    <h1 className="content-box__heading__large">IT'S OUT OF THIS WORLD</h1>
                    <p><i>Redemption period is open.</i></p>
                    <p>
                        <a href="#">How to Redeem.</a>
                    </p>
                    <Button value='Redeem now' styleClass='btn-primary-md'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content