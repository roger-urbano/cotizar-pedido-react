import React from 'react';
import { Input as InputStrap, Label } from "reactstrap";
import './input.scss';

interface InputProps {
    label: string;
    value?: any;
    id: any;
    type: any;
    name: string;
    style?: any;
    innerRef?: React.Ref<HTMLInputElement | HTMLTextAreaElement>;
}

const Input: React.FC<InputProps> = ({ label, value, id, type, name, style, innerRef }) => {
   return (
    <div className="input--set" style={{ ...style }}>
        <Label for={id} className="input--label">
            {label}
        </Label>
        <InputStrap 
            className="input--field"
            name={name}
            type={type ? type : "text"}
            id={id}
            value={value}
            innerRef={innerRef}
        />
    </div>
   )
}

export default Input