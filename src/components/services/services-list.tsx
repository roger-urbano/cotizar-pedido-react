import React from 'react';
import { ArrowDownIcon } from '../../assets/svgs/arrow-down';
import './services-list.scss';

export const ServicesList = ( props: any ) => (

  <div className="services toggable">
    <div className={`services--title ${props.active ? 'active' : ''}`}  onClick={props.onActiveService}>
      { props.title } <ArrowDownIcon/>
    </div>
    { 
      props.active ? (
        <div className="services--content toggable_content">
          { props.children }
        </div>
      ) : null
    }
  </div>
)

export default ServicesList