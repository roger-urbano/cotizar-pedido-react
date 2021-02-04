import React, {useState, useEffect} from 'react';
import Title from '../../components/title/title';
import { ButtonToggle} from 'reactstrap';
import { Link, useHistory } from "react-router-dom";
import './index.scss';
import Steps from '../../components/steps/steps';
import Plan from '../../components/plan/plan';
import PlanBenefits from '../../components/plan-benefits/plan-benfits';
import ServicesList from '../../components/services/services-list';
import { useLocation } from "react-router-dom";

interface DocumentProps {
    id: number;
    name: string;
}

const ChooseProtection = () => {

    const [typeDocument, setTypeDocument] = useState("");
    const [idPlan, setIdPlan] = useState(null)
    const [indexActive, setIndexActive] =useState(-1)
    const [activeService, setActiveService] = useState(null)
    const { pathname } = useLocation();

    const [listDocument, setListDocument] = useState<DocumentProps[]>([
        {id: 1, name: "DNI"},
        {id: 2, name: "Pasaporte"},
    ]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const [dataPlan, setDataPlan] = useState([
        {typePlan: 'Básico', amount: 200, typePayment: 'Mensual', id: 1},
        {typePlan: 'Intermedio', amount: 260, typePayment: 'Mensual', id: 2},
        {typePlan: 'Básico', amount: 120, typePayment: 'Quincenal', id: 3},
        {typePlan: 'Premium', amount: 360, typePayment: 'Mensual', id: 4},
    ]);

    const [dataServices, setDataServices] = useState([
       {title:  'Servicios brindados', despription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, minima."},
       {title:  'Exclusiones', despription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, minima."},
    ]);

    const history = useHistory();

    const handleClick = () => {
        history.push("/thankyou");
    }

    const onChangeValueInput = (event: any) => {
        const { id, value } = event.target;
        switch (id) {
          case "type_document":
            setTypeDocument(value);
            break;
        }
      };

      const onActivePlan = (id: any, index: number) => {
        setIdPlan(idPlan === id ? null : id );
        setIndexActive(indexActive === index ? -1 : index)
      }

      const onActiveService = (index: any) => {
        setActiveService(activeService === index ? null : index )
      }

    return (
        <div className="padding-x-2 information">
            <Steps
                stepsTotal={5}
                step={1}
            />
            <Title 
                titleLight={"Elige"}
                titleBold={"tu protección"}
                indication={"Selecciona tu plan de Salud"}
            />
            <form>
                <div className="grid--container">
                    <div className="grid--row">
                        <div className="grid--col-sm-12 mb-3 set--plans">
                            {  dataPlan.map((plan, index) => (
                                <Plan  
                                    typePlan={plan.typePlan} 
                                    amount={plan.amount} 
                                    typePayment={plan.typePayment}
                                    id={plan.id}
                                    index= {index}
                                    indexActive={indexActive}
                                    handleActive={()=>onActivePlan(plan.id, index)}
                                />
                                )
                            )}
                            <PlanBenefits/>
                        </div>
                        <div className="grid--col-sm-12">
                            <div className="mb-3">
                                <h6 className="mb-1">Revisa nuestros </h6>
                                <span className="text-info">Servicios y Exclusiones</span> 
                            </div>
                            { dataServices.map((service, index) => (
                                <ServicesList title={service.title} active={activeService === index} onActiveService={()=> onActiveService(index)}> {service.despription} </ServicesList> 
                            ))}
                        </div>
                        <div className="grid--col-sm-12 mb-3 mt-5 d-flex justify-content-between">
                        <span className="text-secondary cursor-pointer">Enviar cotización por correo</span>
                         <ButtonToggle color="primary" 
                            onClick={handleClick}
                        >Comprar plan</ButtonToggle>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ChooseProtection