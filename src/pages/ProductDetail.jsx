import React, { useState } from 'react'
import productData from '../data/products';
import { Link, useParams } from 'react-router-dom';
import Button from './../components/Common/Button';

const ProductDetail = () => {
    const {id} = useParams();
    const product = productData.getProductById(id)
    const [quantity, setQuantity] = useState(1)

    const updateQuantity = (type) => {
      if(type === 'plus'){
        setQuantity(quantity + 1)
      }
      else{
        setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
      }
    }
  return (
   <div className="productDetail">

    <div className="container">
      <div className="productDetail-link">
        <p>
          <Link to={`/`}>Home</Link>
          <span> / </span>
          <Link to={`/packs`}>Back to Product</Link>
        </p>
      </div>
      <div className="productDetail-container">
        <div className="productDetail-container__image">
          <img src={product.image} alt="" />
        </div>
        <div className="productDetail-container__content">
          <h1 className="productDetail-container__content__name">
            {product.title}
          </h1>
          <p className="productDetail-container__content__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="productDetail-container__content__price">
            ${product.price} USD
          </p>
          <div className="productDetail-container__content__quantity">
            <div className="productDetail-container__content__quantity__title">
              Quantity
            </div>
            <div className="productDetail-container__content__quantity__info">
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
          </div>
          <div className="productDetail-container__content__note">
            <i>
              NOTE: All cards from this collection have been pre-minted. Every pack has an equal chance of containing the lowest mint numbers.
            </i>
          </div>
          <Link to={`/cart`}><Button value='Add To Cart' styleClass='btn-primary-dm'/></Link>
        </div>
        
      </div>
    </div>
   </div>
  )
}

export default ProductDetail