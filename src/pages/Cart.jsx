import React, { useState } from 'react'
import cart from './../data/cart-item';
import Button from './../components/Common/Button';

import payment_1 from '../assets/image/paymen_1 (1).png';
import payment_2 from '../assets/image/paymen_1 (2).png';
import payment_3 from '../assets/image/paymen_1 (3).png';
import payment_4 from '../assets/image/paymen_1 (4).png';
import payment_5 from '../assets/image/paymen_1 (5).png';
import payment_7 from '../assets/image/payment_1 (7).png';
import payment_8 from '../assets/image/payment_1 (8).png';

const Cart = () => {
    const [product, setProduct] = useState(1);
    const [quantity,setQuantity] = useState(1);
    const initialValue = 0;
    const totalPrice = cart.reduce((total,item) => total + (item.price * quantity), initialValue)
    
    const [remove , setRemove] = useState(cart);
    
    const handleRemove = (item) => {
        const newList = remove.filter(e => e.id !== item.id);
        setRemove(newList);
    }

    const updateQuantity = (type) => {
        if(type === 'plus'){
            setQuantity(quantity + 1)
        }
        else{
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
        }
    }
  return (
    <div className="cart">
        <div className="container">
            <div className="cart-title">
                <h1>Shopping Cart</h1>
            </div>
            <div className="cart-container">
                <div className="cart-container__content" >
                    {
                        cart.map((item,index) => (
                            <div className="cart-container__content__info" key={index}>
                                <div className="cart-container__content__info__image">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="cart-container__content__info__title">
                                    {item.title}
                                </div>
                                <div className="cart-container__content__info__price">
                                    ${item.price}
                                </div>
                                <div className="cart-container__content__info__quantity">
                                    <div className="quantity__btn" onClick={() => updateQuantity('minus')}>
                                        <i className="bx bx-minus"></i>
                                    </div>
                                    <div className="quantity__input">
                                        {quantity}
                                    </div>
                                    <div className="quantity__btn" onClick={() => updateQuantity('plus')}>
                                        <i className="bx bx-plus"></i>
                                    </div>
                                </div>
                                <div className="cart-container__content__info__remove" onClick={() => handleRemove()}>
                                    <i class='bx bx-trash'></i>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="cart-line"></div>
                <div className="cart-container__box">
                    <div className="cart-box__total">
                        <div className="cart-box__total__title">
                            <h2>Your Cart Total</h2>
                        </div>
                        <div className="cart-box__total__info">
                            <p>Your product: </p> <span>{product}</span>
                        </div>
                        <div className="cart-box__total__info">
                            <p>Your total: </p> <span>${totalPrice}</span>
                        </div>
                        <div className="line"></div>
                        <div className="cart-box__total__note">
                            <i>Shipping & taxes calculated at checkout</i>
                        </div>
                        <Button value='CheckOut' styleClass='btn-primary-dm'/>
                    </div>
                    <div className="cart-box__payment">
                        <div className="cart-box__payment__title">
                            We accept
                        </div>
                        <div className="cart-box__payment__icon">
                            <img src={payment_1} alt="" />
                            <img src={payment_2} alt="" />
                            <img src={payment_3} alt="" />
                            <img src={payment_4} alt="" />
                            <img src={payment_5} alt="" />
                            <img src={payment_7} alt="" />
                            <img src={payment_8} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart