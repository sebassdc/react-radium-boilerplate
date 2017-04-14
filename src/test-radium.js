import React, { Component } from 'react';
import Radium from 'radium';

var styles = {
  base: {
    color: '#fff',

    // Adding interactive state couldn't be easier! Add a special key to your
    // style object (:hover, :focus, :active, or @media) with the additional rules.
    ':hover': {
      background: '#0074d9'
    }
  },

  primary: {
    background: '#0074D9'
  },

  warning: {
    background: '#FF4136'
  }
};

class TestRadium extends Component {
	static propTypes = {
		kind: React.PropTypes.oneOf(['primary', 'warning']).isRequired
	};
  render() {
    return (
      <button style={[styles.base, styles[this.props.kind]]}>
				{this.props.children}
			</button>
    );
  }
}

export default Radium(TestRadium);
