import React from 'react'
import PropTypes from 'prop-types'

const PolicyCard = props => {
  return (
    <div className="policyCard-container">
        <div className="container">
            <div className="policycard-box">
                <i className={props.icon}></i>
                <div className="policycard-box__info">
                    <div className="policycard-box__info__name">
                            {props.name}
                    </div>
                    <div className="policycard-box__info__description">
                            {props.description}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

PolicyCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default PolicyCard