/** @flow */

require('./styles.css');

import React from 'react';
import {Link} from 'react-router';
import Logo from 'Logo';
var {PropTypes} = React;
/*eslint-disable*/
var EMPTY_OBJECT = {};
/*eslint-enable*/

const BG_COLOR = {
  black: 'rgba(0, 0, 0, 0.75)',
  red: 'rgba(219, 69, 0, 0.8)',
  orange: 'rgba(245, 151, 0, 0.8)',
  yellow: 'rgba(242, 202, 0, 0.7)',
};

const LOGO_COLOR = {
  black: null,
  red: '#fff',
  orange: '#fff',
  yellow: '#000',
};

class Hero extends React.Component {
  render(): ?ReactElement {
    var {
      title,
      subtitle,
      children,
      color,
      image = '',
      className = '',
      style = EMPTY_OBJECT,
    } = this.props;

    className = 'Hero ' + className;
    if (color === 'yellow') {
      className = className + 'is-light';
    }

    return (
      <div className="Hero" style={style}>
        <Link to="home">
          <Logo style={{position: 'absolute', top: '0.5em', left: '0.5em', width: 32, margin: '0.25em', zIndex: 5}} color={LOGO_COLOR[color]} />
        </Link>
        <div className="Hero-content">
          <h1 className="Hero-title">{title}</h1>
          <p className="Hero-subtitle">{subtitle}</p>
          {children}
        </div>

        <div className="Hero-overlay" style={{
          backgroundColor: BG_COLOR[color] || BG_COLOR[Hero.defaultProps.color],
        }} />
        {image && (
          <div className="Hero-image" style={{backgroundImage: `url(${image})`}} />
        )}
      </div>
    );
  }
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  color: PropTypes.oneOf(['black', 'yellow', 'red', 'orange']),
  image: PropTypes.string.isRequired,
  children: PropTypes.node,
  style: PropTypes.object,
};

Hero.defaultProps = {
  color: 'orange',
};

export default Hero;

