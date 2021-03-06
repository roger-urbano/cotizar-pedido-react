import React, {useState, useEffect} from 'react';
import Input from '../../components/input/input';
import Select from '../../components/select/select';
import Title from '../../components/title/title';
import { FormGroup, Label, Input as InputCheck, ButtonToggle } from 'reactstrap';
import { useHistory } from "react-router-dom";
import './index.scss';
import Steps from '../../components/steps/steps';
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../redux/store';
import { getUserAction } from '../../redux/actions/user/userAction';
import moment from "moment";
import { useForm } from "react-hook-form";


interface DocumentProps {
    id: number;
    name: string;
}

const UserInformation = () => {

    const [typeDocument, setTypeDocument] = useState<number | undefined>();
    const [numberDoc, setNumberDoc] = useState<number>();
    const [isLoading, setIsLoading] = useState(Boolean);
    const [firstName, setFirstName] = useState<string | undefined>("");
    const [lastName, setLastName] = useState<string | undefined>("");
    const [surName, setSurName] = useState<string | undefined>("");
    const [typeSecurity, setTypeSecurity] = useState<string | undefined>("");

    const dataUser = useSelector((state: RootStore) => state.userReducer);

    const [listDocument, setListDocument] = useState<DocumentProps[]>([
        {id: 1, name: "DNI"},
        {id: 2, name: "Pasaporte"},
    ])

    const history = useHistory();
    const { pathname } = useLocation();
    const dispatch = useDispatch();

    const { handleSubmit,
            register,
            watch,
            errors,
            formState 
        } = useForm({
            mode: "onChange"
        });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        dispatch(getUserAction())
    }, []);

    useEffect(() => {
        setIsLoading(dataUser?.loading);
        setFirstName(dataUser?.user?.first_name);
        setLastName(dataUser?.user?.last_name);
        setSurName(dataUser?.user?.sur_name);
        setTypeDocument(dataUser?.user?.type_doc);
        setNumberDoc(dataUser.user?.document_number);
    }, [dataUser])

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
        history.push("/protection");
    }

    const onChangeSecurity = (event: any) => {
        const { name, value } = event.target;
        setTypeSecurity(value)
    }

    return (
        <div className="grid--col-xs-12 grid--col-sm-12 grid--col-md-8 padding-x-2">

            <div className="information">
                <Steps
                    stepsTotal={5}
                    step={1}
                />          

                <Title 
                    titleLight={"Hola"}
                    titleBold={firstName}
                    indication={"Valida que los datos sean correctos"}
                />
                <form onSubmit={handleSubmit(onSubmitForm)}>
                <h6 className="padding-x-1">Datos personales del títular</h6>
                    <div className="grid--container">
                        <div className="grid--row">
                        <div className="grid--col-xs-12 mb-3">
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
                                <Input 
                                    label="Nro Documento"
                                    id="nro_document"
                                    name="nro_document"
                                    value={dataUser?.user?.document_number}
                                    type="text"
                                    style={{ width: '100%', color: 'red'}}
                                    innerRef={register({
                                        required: "*El campo es requerido"
                                    })}
                                />
                            </div>
                        </div>

                            <div className="sm-column-12 mb-3">
                                <Input 
                                    label="Nombre"
                                    id="first_name"
                                    name="first_name"
                                    value={dataUser?.user?.first_name}
                                    type="text"
                                    innerRef={register({
                                        required: "*El campo es requerido"
                                    })}
                                />
                            </div>
                            <div className="sm-column-12 mb-3">
                                <Input 
                                    label="Apellido paterno"
                                    id="last_name"
                                    name="first_name"
                                    value={dataUser?.user?.last_name}
                                    type="text"
                                    innerRef={register({
                                        required: "*El campo es requerido"
                                    })}
                                />
                            </div>
                            <div className="sm-column-12 mb-3">
                                <Input 
                                    label="Apellido materno"
                                    id="first_name"
                                    name="first_name"
                                    value={dataUser?.user?.sur_name}
                                    type="text"
                                    innerRef={register({
                                        required: "*El campo es requerido"
                                    })}
                                />
                            </div>
                            <div className="grid--col-xs-12 mb-3">
                                <Input 
                                    label="Fecha de Nacimiento"
                                    id="date"
                                    name="date"
                                    value={moment(dataUser?.user?.date_birth).format("DD-MM-YYYY")}
                                    type="text"
                                    innerRef={register({
                                        required: "*El campo es requerido"
                                    })}
                                />
                            </div>
                            <div className="grid--col-xs-12 mb-3">
                                <h6>Género</h6>
                                <FormGroup check>
                                    <Label check className="label">
                                        <InputCheck type="radio" name="radio1" 
                                            checked={dataUser?.user?.gender === 1 ? true : false}
                                            innerRef={register({
                                                required: "*El campo es requerido"
                                            })}
                                            />
                                        Masculino
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check className="label">
                                        <InputCheck type="radio" name="radio1" checked={dataUser?.user?.gender === 2 ? true : false}
                                            innerRef={register({
                                                required: "*El campo es requerido"
                                            })}
                                        />
                                        Femenino
                                        </Label>
                                </FormGroup>
                            </div>
                            <div className="grid--col-xs-12 mb-3">
                                <h6>¿A quién vamos a asegurar?</h6>
                                <FormGroup check>
                                    <Label check className="label">
                                        <InputCheck type="radio" name="type_security" value="seguro personal"  onChange={onChangeSecurity}
                                        innerRef={register({
                                            required: true
                                        })}/>
                                        Sólo a mi
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check className="label">
                                        <InputCheck type="radio" name="type_security" value="seguro familiar" onChange={onChangeSecurity}
                                        innerRef={register({
                                            required: true
                                        })}/>
                                        A mi familia
                                        </Label>
                                </FormGroup>
                                {  errors.type_security && <small className="text-danger pl-1 mt-1">"*El seguro es requerido"</small> }
                            </div>
                            <div className="grid--col-xs-12 mb-3 text-right">
                            <ButtonToggle color="danger" type="submit"
                            >Continuar</ButtonToggle>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserInformation