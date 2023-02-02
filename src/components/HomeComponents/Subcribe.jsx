import React from 'react'

import SubcribeBG from '../../assets/image/subcribeBackground.png';
import Button from '../Common/Button';

const Subcribe = () => {
  return (
    <div className="subcribe">
        <div className="subcribeImg">
            <img src={SubcribeBG} alt="" />
        </div>
        <div className="container">
            <div className="subcribe-container">
                <div className="subcribe-box">
                    <h2>BE THE FIRST TO "SEE" WHAT'S COMING</h2>
                    <p>Promotions, new products and pre-sales, whitelisting access and more exclusives. Will be out of this world.</p>
                    <form action="">
                        <input id="emailAddress" type="email"/>
                        <span>Your e-mail</span>
                        <Button value='shop now' styleClass='btn-primary-sm'/>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subcribe