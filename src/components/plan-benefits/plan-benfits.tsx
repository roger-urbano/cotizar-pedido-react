import React from 'react';
import imgShield from '../../assets/images/Illustration.png'
import HeartIcon from '../../assets/svgs/heart';
import './plan-benefits.scss';

interface PlanBenefitsProps {
    listBenefits?: [];
}

const PlanBenefits: React.FC<PlanBenefitsProps> = ( listBenefits) => {
    
   return (
    <div className="benefits--card">
        <div className="benefits--head">Cuentas con estos beneficios</div>
        <div className="benefits--body">
            <div className="benefits--info">
                <div className="benefits--coberture">
                    <small>Cobertura máxima</small>
                    <h5>S/1MM</h5>
                    <span className="badge badge-success">PLAN CLÁSICO</span>
                </div>
                <figure className="benefits--figure">
                    <img className="benefits--img" src={imgShield} alt=""/>
                </figure>
            </div>
            <ul className="benefits--list">
                <li className="benefits--item">
                    <HeartIcon className="mr-2"/> <strong>Lima</strong> (zona de cobertura)
                </li>
                <li className="benefits--item">
                    <HeartIcon className="mr-2"/>
                    <strong>+30 clínicas</strong> en red afiliada</li>
                <li className="benefits--item">
                    <HeartIcon className="mr-2"/>Médico a domicilio
                </li>
                <li className="benefits--item benefits--item-disabled">
                    <HeartIcon className="mr-2"/>Chekeo preventivo
                </li>
                <li className="benefits--item benefits--item-disabled">
                    <HeartIcon className="mr-2"/>Reembolso nacional
                </li>
            </ul>
        </div>
    </div>
   )
}

export default PlanBenefits