import React from 'react';
import './plan.scss';
import { DoneIcon } from '../../assets/svgs/svg';

interface PlanProps {
    typePlan?: string;
    amount?: any;
    typePayment?: string;
    id?: any;
    index?: number;
    indexActive?: number;
    handleActive?: () => any;
}


const Plan: React.FC<PlanProps> = ({ typePlan, amount, typePayment, id, handleActive,  index, indexActive }) => {

   return (
     
        <div className={`plan ${indexActive === index ? 'active' : ''}`} onClick={handleActive} key={id}>
            <div className="plan--content">
                <DoneIcon color={(indexActive === index) ? '#83cc5e' : '#BDBDBD'} className={'icon-done'}/>
                <span className="plan--type">{typePlan}</span>
                <h6 className="plan--amount"><small className="plan--coin">S/.</small>{amount}</h6>
                <span className="plan--payment">{typePayment}</span>
            </div>
        </div>
           
   )
}

export default Plan