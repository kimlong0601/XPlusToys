import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';



const ProductCard = props => {

  return (
    <div className='product-card'>

       <Link to={`/packs/${props.id}`}>
            <div className="product-card__image">
                <img src={props.image} alt="" />
            </div>
            <h3 className="product-card__name">
                {props.title}
            </h3>
            <div className="product-card__price">
                 $ {props.price} USD
            </div>
       </Link>
       
    </div>
  )
}

ProductCard.propTypes = {
    id: PropTypes.string.isRequired,
    // img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired
}

export default ProductCard