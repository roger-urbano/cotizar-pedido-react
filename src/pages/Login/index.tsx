import React, {useState} from 'react';
import Input from '../../components/input/input';
import Select from '../../components/select/select';
import Title from '../../components/title/title';
import { FormGroup, Label, Input as InputCheck, ButtonToggle } from 'reactstrap';
import { useHistory } from "react-router-dom";
import './index.scss';

interface DocumentProps {
    id: number;
    name: string;
}

const Login = () => {
    const [typeDocument, setTypeDocument] = useState("");
    const [listDocument, setListDocument] = useState<DocumentProps[]>([
        {id: 1, name: "DNI"},
        {id: 2, name: "Pasaporte"},
    ])

    const history = useHistory();

    const handleClick = () => {
        history.push("/information");
    }

    const onChangeValueInput = (event: any) => {
        const { id, value } = event.target;
        switch (id) {
          case "type_document":
            setTypeDocument(value);
            break;
        }
      };


    return (
        <div className="padding-x-2 login">
            <Title 
                titleLight={"Obten tu"}
                titleBold={"seguro ahora"}
                indication={"Ingresa los datos para comenzar"}
            />
            <form>
                <div className="grid--container">
                    <div className="grid--row">
                        <div className="grid--col-sm-12 mb-3">
                            <div className="document--set">
                                <Select
                                    id="type_document"
                                    value={typeDocument}
                                    name="type_document"
                                    data={listDocument}
                                    field="name"
                                    onChange={onChangeValueInput}
                                    style={{ width: '100px' }}
                                />                            
                                <Input 
                                    label="Nro Documento"
                                    id="nro_document"
                                    name="nro_document"
                                    value=""
                                    type="number"
                                    style={{ width: '100%'}}
                                />
                            </div>
                        </div>
                        <div className="grid--col-sm-12 mb-3">
                            <Input 
                                label="Fecha de Nacimiento"
                                id="date"
                                name="date"
                                value=""
                                type="date"
                            />
                        </div>
                        <div className="grid--col-sm-12 mb-3">
                            <Input 
                                label="Celular"
                                id="phone"
                                name="phone"
                                value=""
                                type="number"
                            />
                        </div>
                        <div className="grid--col-sm-12 mb-3">
                            <FormGroup check>
                                <Label check  className="label">
                                <InputCheck type="checkbox" id="checkbox2" />{' '}
                                    Acepto la política de protección de datos personales y términos y condiciones
                                </Label>
                            </FormGroup>
                        </div>
                        <div className="grid--col-sm-12 mb-3">
                            <FormGroup check>
                                <Label check className="label" >
                                <InputCheck type="checkbox" id="checkbox2" />{' '}
                                    Acepto la política de protección de datos personales y términos y condiciones
                                </Label>
                            </FormGroup>
                        </div>
                        <div className="grid--col-sm-12 mb-3 text-right">
                         <ButtonToggle color="primary" 
                            onClick={handleClick}
                        >Comencemos</ButtonToggle>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login