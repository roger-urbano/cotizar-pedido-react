import React, {useState, useEffect} from 'react';
import Input from '../../components/input/input';
import Select from '../../components/select/select';
import Title from '../../components/title/title';
import { FormGroup, Label, Input as InputCheck, ButtonToggle } from 'reactstrap';
import { useHistory } from "react-router-dom";
import './index.scss';
import Steps from '../../components/steps/steps';
import { useLocation } from "react-router-dom";
import Axios from 'axios';


interface DocumentProps {
    id: number;
    name: string;
}

const UserInformation = () => {

    const [typeDocument, setTypeDocument] = useState("");
    const [dataUser, setDataUser] = useState<any>([]);
    const [listDocument, setListDocument] = useState<DocumentProps[]>([
        {id: 1, name: "DNI"},
        {id: 2, name: "Pasaporte"},
    ])

    const history = useHistory();
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        Axios.get<any[]>(`https://jsonplaceholder.typicode.com/users`).then(response => {
            const users = response.data
            setDataUser(users)
      })
      console.log(dataUser);
    }, []);

    const handleClick = () => {
        history.push("/protection");
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
        <div className="padding-x-2 information">
            <Steps
                stepsTotal={5}
                step={1}
            />
            <Title 
                titleLight={"Hola"}
                titleBold={"Pepito"}
                indication={"Valida que los datos sean correctos"}
            />
            <form>
            <h6>Datos personales del títular</h6>
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

                        <div className="sm-column-12 mb-3">
                            <Input 
                                label="Nombre"
                                id="first_name"
                                name="first_name"
                                value=""
                                type="text"
                            />
                        </div>
                        <div className="sm-column-12 mb-3">
                            <Input 
                                label="Apellido paterno"
                                id="last_name"
                                name="first_name"
                                value=""
                                type="text"
                            />
                        </div>
                        <div className="sm-column-12 mb-3">
                            <Input 
                                label="Apellido materno"
                                id="first_name"
                                name="first_name"
                                value=""
                                type="text"
                            />
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
                            <h6>Género</h6>
                            <FormGroup check>
                                <Label check className="label">
                                    <InputCheck type="radio" name="radio1" />
                                    Masculino
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check className="label">
                                    <InputCheck type="radio" name="radio1" />
                                    Femenino
                                    </Label>
                            </FormGroup>
                        </div>
                        <div className="grid--col-sm-12 mb-3">
                            <h6>¿A quién vamos a asegurar?</h6>
                            <FormGroup check>
                                <Label check className="label">
                                    <InputCheck type="radio" name="radio2" />
                                    Sólo a mi
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check className="label">
                                    <InputCheck type="radio" name="radio2" />
                                     A mi familia
                                    </Label>
                            </FormGroup>
                        </div>
                        <div className="grid--col-sm-12 mb-3 text-right">
                         <ButtonToggle color="primary" 
                            onClick={handleClick}
                        >Continuar</ButtonToggle>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UserInformation