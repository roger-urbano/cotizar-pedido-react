import React from 'react';
import { CSSProperties } from 'react';
import imgShield from '../../assets/images/shield.png'
import HeartIcon from '../../assets/svgs/heart';
import './plan-benefits.scss';

interface PlanBenefitsProps {
    listBenefits?: [];
    typePlanId: number;
    priceCoberture: number;
    typePlan: string;
}

const PlanBenefits: React.FC<PlanBenefitsProps> = ({ listBenefits, typePlanId, priceCoberture, typePlan }) => {

    const typePlanUp = typePlan.toUpperCase();

    const boldText: CSSProperties = {
        fontWeight: 300
    } as const;
    
   return (
    <div className="benefits--card">
        <div className="benefits--head">Cuentas con estos beneficios</div>
        <div className="benefits--body">
            <div className="benefits--info">
                <div className="benefits--coberture">
                    <small>Cobertura máxima</small>
                    <h5>S/ {priceCoberture}MM</h5>
                    <span className="badge badge-success px-2" style={ boldText }>{`PLAN ${typePlanUp ? typePlanUp :'BÁSICO'}`}</span>
                </div>
                <figure className="benefits--figure">
                    <img className="benefits--img" src={imgShield} alt=""/>
                </figure>
            </div>
            <ul className="benefits--list">
                <li className={`benefits--item ${typePlanId > 0 ? '' : 'benefits--item-disabled'}`}>
                    <HeartIcon className="mr-2" color={ typePlanId > 0 ? '#EF3340' : '#BDBDBD'}/> <strong>Lima</strong> (zona de cobertura)
                </li>
                <li className={`benefits--item ${typePlanId > 0 ? '' : 'benefits--item-disabled'}`}>
                    <HeartIcon className="mr-2" color={ typePlanId > 0 ? '#EF3340' : '#BDBDBD'}/>
                    <strong>+30 clínicas</strong> en red afiliada</li>
                <li className={`benefits--item ${ typePlanId > 1 ? '' : 'benefits--item-disabled'}`}>
                    <HeartIcon className="mr-2" color={ typePlanId > 1 ? '#EF3340' : '#BDBDBD'}/>Médico a domicilio
                </li>
                <li className={`benefits--item ${ typePlanId > 2 ? '' : 'benefits--item-disabled'}`}>
                    <HeartIcon className="mr-2" color={ typePlanId > 2 ? '#EF3340' : '#BDBDBD'}/>Chekeo preventivo
                </li>
                <li className={`benefits--item ${ typePlanId > 3 ? '' : 'benefits--item-disabled'}`}>
                    <HeartIcon className="mr-2" color={ typePlanId > 3 ? '#EF3340' : '#BDBDBD'}/>Reembolso nacional
                </li>
                <li className={`benefits--item ${ typePlanId > 3 ? '' : 'benefits--item-disabled'}`}>
                    <HeartIcon className="mr-2" color={ typePlanId > 3 ? '#EF3340' : '#BDBDBD'}/>Reembolso internacional
                </li>
            </ul>
        </div>
    </div>
   )
}

export default PlanBenefits