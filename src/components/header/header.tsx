import React, {useState} from 'react';
import imgBase from '../../assets/images/Base.png';
import imgMobile from '../../assets/images/gl_mobile-20x20.png';
import imgShield from '../../assets/images/gl_shield-20x20.png';
import './header.scss';


interface BenefitsProps {
    icon: any;
    description: string;
    id: any;
}

const Benefits: React.FC<BenefitsProps> = ({ icon, description, id }) => {
    return (
            <li className="header--item" key={id}><img className="header--item-icon" src={icon} alt=""/>{description}</li>
    )
}

const Header = () => {

    const [listBenefits, setListBenetis] = useState<BenefitsProps[]>([
        {icon: imgShield, description: "Cómpralo de manera fácil y rápida", id: 1},
        {icon: imgMobile, description: "Cotiza y compra tu seguro 100% digital", id: 2},
        {icon: imgShield, description: "Hasta S/.12 millones de cobertura anual", id: 3},
        {icon: imgMobile, description: "Más de 300 clínicas en todo el Perú", id: 3},
    ])

    return (
        // <div className="header" style={{backgroundImage:`url(${imgBase})`}}>
        <div className="header">
            <div className="header--cnt">
                <h1 className="header--title">Seguro de 
                    <br/> <strong className="header--title-bold">Salud</strong>
                </h1>
                <ul className="header--list">
                {   listBenefits.map((benefit)  => (
                        <Benefits icon={benefit.icon} description={benefit.description} id={benefit.id} key={benefit.id} />
                    ))
                }
                </ul>
                <small className="header--copy">&copy; 2021 / Company</small>
            </div>
            <figure className="header--figure">
                <img className="header--img" src={imgBase} alt=""/>
            </figure>
        </div>
    )
}

export default Header