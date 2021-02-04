import React from 'react';

const HeartIcon  = ({color = '#BDBDBD', width = 16, height = 16, className = ''}) => {
  return (
    <svg  xmlns="http://www.w3.org/2000/svg"
	 viewBox="0 0 24 24" width={width} height={height} className={className}>
        <path d="M17.2,2.1L17.2,2.1c-2,0-3.9,0.9-5.2,2.4C10.7,2.9,8.8,2,6.8,2.1C3,2.1,0,5.1,0,8.9c0,6.4,11.2,12.7,11.7,13
            c0.2,0.1,0.4,0.1,0.6,0c0.5-0.2,11.7-6.4,11.7-13C24,5.1,21,2.1,17.2,2.1z" fill={color}/>
    </svg>
  );
};

export default HeartIcon