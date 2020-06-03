import React from 'react';

const DigitalDisplay = (props) => {
  let size = props.size;
  //console.log(props.time);
  let styles = {
    fontSize: size === 'large' ? '2em' : '1em'
  };
  const local = time => props.time.toLocaleString('EU');
  return <div style={styles}>{local(props.time)}</div>;
};

export default DigitalDisplay;