import React from 'react';
import LeftArow from '../../assets/images/left-arrow.png'
import './steps.scss';
import { useHistory } from "react-router-dom";

interface StepsProps {
    stepsTotal: number;
    step: number;
}

const Steps: React.FC<StepsProps> = ({ stepsTotal, step }) => {

    
    const history = useHistory();
    
   return (
        <div className="steps"  onClick={() => { history.goBack() }}>
            <img className="steps--img" src={LeftArow} alt=""/>
            <p className="steps--text">
                <span className="steps--text-bold">PASO {step} </span> DE {stepsTotal} 
            </p>
        </div>
   )
}

export default Steps