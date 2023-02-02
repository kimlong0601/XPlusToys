import React from 'react'
import PropTypes from 'prop-types'

const CatalogCard = props => {
  return (
    <div className='catalog-card'>
        <div className="catalog-card-video">
            <video src={props.video} autoPlay loop></video>
        </div>
    </div>
  )
}

CatalogCard.propTypes = {
    video: PropTypes.string.isRequired
}

export default CatalogCard