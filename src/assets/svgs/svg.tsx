import React from 'react';
export const DoneIcon = ({color = '#BDBDBD', width = 20, height = 20, className = ''}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24" width={width} height={height} className={className}>
    <path  d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M20.4,8.2l-9.8,9.7c-0.3,0.3-0.7,0.4-1.1,0.4
        s-0.8-0.1-1.1-0.4l-4.9-4.9c-0.6-0.6-0.6-1.5,0-2.1c0.6-0.6,1.5-0.6,2.1,0l3.8,3.8l8.7-8.7c0.6-0.6,1.5-0.6,2.1,0
        C21,6.7,21,7.6,20.4,8.2z" fill={color}/>
    </svg>
  );
};
