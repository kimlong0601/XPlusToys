import React from 'react'
import PropTypes from 'prop-types';



const Button = ({styleClass, value, onClick}) => (
    <button 
        className={`btn ${styleClass}`}
        onClick={(event) => onClick(event)}
    >
       <span> {value} </span>
    </button>
);

Button.propTypes = {
    value: PropTypes.string.isRequired,
    styleClass: PropTypes.string,
};


export default Button