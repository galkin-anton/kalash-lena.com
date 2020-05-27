import React from 'react';

const AnalogDisplay = function AnalogDisplay(props) {
  let date = props.time;
  //console.log('Updating time...' + date.getSeconds());
  let dialStyle = {
    position: 'relative',
    margin: 5,
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    borderRadius: '50%',
    borderStyle: 'solid',
    borderColor: 'black',
  };
  let secondHandStyle = {
    position: 'relative',
    top: '50%',
    left: '50%',
    border: '1px solid red',
    width: '40%',
    height: 1,
    transform: 'rotate(' + (date.getSeconds() * 6 - 90).toString() +
        'deg) translateY(-50%)',
    transformOrigin: '0% 0%',
    backgroundColor: 'red',
  };
  let minuteHandStyle = {
    position: 'relative',
    top: 100,
    left: 100,
    border: '1px solid grey',
    width: '40%',
    height: 3,
    transform: 'rotate(' + (date.getMinutes() * 6 - 90).toString() +
        'deg) translateY(-50%)',
    transformOrigin: '0% 0%',
    backgroundColor: 'grey',
  };
  let hourHandStyle = {
    position: 'relative',
    top: 92,
    left: 106,
    border: '1px solid grey',
    width: '20%',
    height: 7,
    transform: 'rotate(' + (date.getMinutes() * 6 - 90).toString() +
        'deg) translateY(-50%)',
    transformOrigin: '0% 0%',
    backgroundColor: 'grey',
  };

  return <div>
    <div style={dialStyle}>
      <div style={secondHandStyle}/>
      <div style={minuteHandStyle}/>
      <div style={hourHandStyle}/>
    </div>
  </div>;
};

export default AnalogDisplay;