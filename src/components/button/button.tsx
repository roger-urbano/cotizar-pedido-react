import React from 'react';

interface ButtonProps {
    label: string;
    value?: any;
    id: any;
    type: string;
}

const Button: React.FC<ButtonProps> = ({ label, value, id, type }) => {
   return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input
            type="text" 
            id={id}
            value={value}
        />
    </div>
   )
}

export default Button