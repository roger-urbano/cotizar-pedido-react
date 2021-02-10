import React from "react";
import { Label } from "reactstrap";
import "./select.scss";


interface SelectProps {
    label?: string;
    id: any;
    value: any;
    data: any[];
    field: any;
    appearance?: any; 
    onChange: (event: any) => void;
    name: string;
    style?: any;
    ref?: ((instance: HTMLSelectElement | null) => void) | React.RefObject<HTMLSelectElement> | null | undefined
}

const Select: React.FC<SelectProps> = ({ label, id, value, data, field, appearance, onChange, name, style, ref }) => {

    return (
      <div className="select--set">
        { label && (
            <Label for={name} className="select--label">
                {label}
            </Label> 
        )}
          <select
            className="select--field"
            style={{ ...style }}
            name={name}
            value={value}
            id={id}
            onChange={onChange}
            ref={ref}
          >
            <option value="">Seleccione</option>
            {data?.map((item, index) => (
              <option
                key={index}
                value={item.id}
              >
                {item[field]}
              </option>
            ))}
          </select>
      </div>
    );
}
export default Select