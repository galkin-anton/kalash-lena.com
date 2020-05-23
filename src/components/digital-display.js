import React from 'react';

const DigitalDisplay = (props) => {
  let size = props.size;
  let styles = {
    fontSize: size === 'large' ? '2em' : '1em'
  };

  return <div style={styles}>{props.time}</div>;
};

export default DigitalDisplay;