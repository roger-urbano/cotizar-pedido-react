import React, {useState} from 'react';
import imgBase from '../../assets/images/Base.png';
import imgMobile from '../../assets/images/gl_mobile-20x20.png';
import imgShield from '../../assets/images/gl_shield-20x20.png';
import imgFamily from '../../assets/images/family.png';
import imglogo from '../../assets/images/logo-rimac.png';
import './header.scss';
import { useLocation } from 'react-router-dom';
 


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

    // const { pathname } = useLocation();
    const location = useLocation();  

    const [listBenefits, setListBenetis] = useState<BenefitsProps[]>([
        {icon: imgShield, description: "Cómpralo de manera fácil y rápida", id: 1},
        {icon: imgMobile, description: "Cotiza y compra tu seguro 100% digital", id: 2},
        {icon: imgShield, description: "Hasta S/.12 millones de cobertura anual", id: 3},
        {icon: imgMobile, description: "Más de 300 clínicas en todo el Perú", id: 3},
    ])

    return (
        <div  className={`grid--col-xs-12  ${location.pathname === "/login" ? 'grid--col-sm-7' : 'grid--col-sm-4' }`}>
            <div className="header">
                <img  className="header--logo"src={imglogo} alt=""/>
                { location.pathname === "/login" ? 
                    <div className="header--left">
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
                    : ""
                } 
                <div className="header--right">
                    <img className="header--background" src={imgBase} alt=""/>
                        <figure className="header--figure">
                            <img className="header--img-family" src={imgFamily} alt=""/>
                        </figure>
                </div>
            </div>
        </div>
    )
}

export default Header