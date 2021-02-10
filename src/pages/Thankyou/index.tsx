import React from 'react';
import Title from '../../components/title/title';
import { ButtonToggle} from 'reactstrap';
import './index.scss'
import { useHistory } from "react-router-dom";

const Thankyou = () => {

    const history = useHistory();
    const handleClick = () => {
        history.push("/login");
    }
    return (
        <div className="thankyou">
            <div className="thankyou--content">
                <Title 
                    titleLight="!Gracias por"
                    titleBold="confiar en nostros!"
                    indication="Queremso conocer mejor la salud de los asegurados un asesor se pondra en contacto contigo en las siguietes 40 horas "  
                />
                <div className="text-right">
                <ButtonToggle color="primary" onClick={handleClick}>Comprar plan</ButtonToggle>
                </div>
            </div>
        </div>
    )
}

export default Thankyou