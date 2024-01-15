import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
    return (
        <button type={props.type} className={props.className}>
            {props.children}
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}

export default Button