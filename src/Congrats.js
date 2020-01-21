import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
* Functional react component for Congrats message
* @function
* @param {object} props = React props
* @returns {JSX.Element} Rendered Component or null if success prop is false
*/
const Congrats = (props) => {
  if (props.success) {
    return(
      <div data-test="component-congrats" className="alert alert-success">
        <span data-test="congrats-message">
          Congratulations! You Guessed the Word!
        </span>
      </div>
    )
  } else {
    return (
      <div data-test="component-congrats"></div>
    );
  }
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
