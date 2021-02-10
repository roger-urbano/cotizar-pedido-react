import React, {useState} from 'react';
import Input from '../../components/input/input';
import Select from '../../components/select/select';
import Title from '../../components/title/title';
import { FormGroup, Label, Input as InputCheck, ButtonToggle } from 'reactstrap';
import { useHistory } from "react-router-dom";
import './index.scss';
import { useForm } from "react-hook-form";

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
    const { handleSubmit,
            register,
            watch,
            errors,
            formState 
        } = useForm({
            mode: "onChange"
        });


    const onChangeValueInput = (event: any) => {
        const { id, value } = event.target;
        switch (id) {
          case "type_document":
            setTypeDocument(value);
            break;
        }
      };

    const onSubmitForm = (data: any) => {
        console.log("enviar data", data);
        history.push("/information");
    }


    return (
        <div className="padding-x-2 login">
            <Title 
                titleLight={"Obten tu"}
                titleBold={"seguro ahora"}
                indication={"Ingresa los datos para comenzar"}
            />
            <form onSubmit={handleSubmit(onSubmitForm)}>
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
                                    ref={register({
                                        required: "*Requerido"
                                    })}
                                />
                                { errors.type_document && <small className="text-danger pl-1 mt-1">{ errors.type_document.message }</small> }
                                <div style={{ width: '100%' }}>
                                    <Input 
                                        label="Nro Documento"
                                        id="nro_document"
                                        name="nro_document"
                                        type="number"
                                        style={{ width: '100%'}}
                                        innerRef={register({
                                            required: "El campo es requerido"
                                        })}
                                    />
                                    { errors.nro_document && <small className="text-danger pl-1 mt-1">{ errors.nro_document.message }</small> }
                                </div>                          
                                
                            </div>
                        </div>
                        <div className="grid--col-sm-12 mb-3">
                            <Input 
                                label="Fecha de Nacimiento"
                                id="date"
                                name="date"
                                type="date"
                                innerRef={register({
                                    required: "El campo es requerido"
                                })}
                            />
                            { errors.date && <small className="text-danger pl-1 mt-1">{ errors.date.message }</small> }
                        </div>
                        <div className="grid--col-sm-12 mb-3">
                            <Input 
                                label="Celular"
                                id="phone"
                                name="phone"
                                type="number"
                                innerRef={register({
                                    required: "El campo es requerido"
                                })}
                            />
                            { errors.phone && <small className="text-danger pl-1 mt-1">{ errors.phone.message }</small> }
                        </div>
                        <div className="grid--col-sm-12 mb-3">
                            <FormGroup check>
                                <Label check  className="label">
                                <InputCheck type="checkbox" id="checkbox2" name="check_conditions" innerRef={register({
                                    required: "El campo es requerido"
                                })} />
                                    Acepto la política de protección de datos personales y términos y condiciones
                                </Label>
                            </FormGroup>
                            { errors.check_conditions && <small className="text-danger pl-1 mt-1">{ errors.check_conditions.message }</small> }
                        </div>
                        <div className="grid--col-sm-12 mb-3">
                            <FormGroup check>
                                <Label check className="label" >
                                <InputCheck type="checkbox" id="checkbox2" name="check_conditions2"  innerRef={register({
                                    required: "El campo es requerido"
                                })}/>
                                    Acepto la Política de Envío de Comunicaciones Comerciales.
                                </Label>
                            </FormGroup>
                            { errors.check_conditions2 && <small className="text-danger pl-1 mt-1">{ errors.check_conditions2.message }</small> }
                        </div>
                        <div className="grid--col-sm-12 mb-3 text-right">
                         <ButtonToggle color="danger" type="submit" 
                        >Comencemos</ButtonToggle>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login