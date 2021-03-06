import React from 'react';
// stroke='currentColor'
export const BackIcon  = ({color = '#EF3340', width = 24, height = 24, className = ''}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
	 viewBox="0 0 24 24" width={width} height={height} className={className}>
<g>
	<path d="M12,24c6.6,0,12-5.4,12-12c0-6.6-5.4-12-12-12S0,5.4,0,12C0,18.6,5.4,24,12,24z M12,1.6c5.7,0,10.4,4.6,10.4,10.4
		c0,5.7-4.6,10.4-10.4,10.4C6.3,22.4,1.6,17.7,1.6,12C1.6,6.3,6.3,1.6,12,1.6z" fill={color}/>
	<path d="M10.4,17.1c0.3,0.3,0.8,0.3,1.2,0c0.3-0.3,0.3-0.8,0-1.2l-3.2-3.2l9.1,0c0.5,0,0.8-0.4,0.8-0.8c0-0.5-0.4-0.8-0.8-0.8
		l-9.1,0L11.6,8c0.3-0.3,0.3-0.8,0-1.2c-0.2-0.2-0.4-0.2-0.6-0.2c-0.2,0-0.4,0.1-0.6,0.2l-4.6,4.6c-0.2,0.2-0.2,0.4-0.2,0.6
		c0,0.2,0.1,0.4,0.2,0.6L10.4,17.1z" fill={color}/>
</g>
</svg>
  );
};

