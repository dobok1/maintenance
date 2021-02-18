import React, { useState } from 'react'
import { Img } from '../../helpers/Img';
import { useSelector } from 'react-redux';
import { updateVehicleById } from '../../actions/vehicleAction';
import { useDispatch } from 'react-redux';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import Swal from 'sweetalert2';

export const ModalVehicule = () => {

    const dispatch = useDispatch();
    const { openModal, vehicle } = useSelector(state => state.vehicle);
    const { id,  _id, status, name: namesaved } = vehicle;
    const now = moment().minutes(0).seconds(0).add(1, 'hours');
    const nowPlus1 = now.clone().add(1, 'hours');
    const [ dateEnd, setDateEnd ] = useState( nowPlus1.toDate() );

    const initVehicle = {
        name: namesaved,
        estimatedate: nowPlus1.toDate()
    }
    const [formValues, setFormValues] = useState(initVehicle);
    const { name } = formValues;

    const isOpenModal = openModal ? 'show' : '';

    const onClose = () => {
        /* dispatch(setItemSelected({}));
        dispatch(setPerks([])); */
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name } = formValues;
        if( !name ){
            Swal.fire('Aviso','Ingresar nombre','warning');
            return;
        }
        dispatch(updateVehicleById( _id, formValues ));
    }

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name] : target.value
        })
    }

    const handleEstimateDateChange = (e) => {
        setDateEnd(e);
        setFormValues({
            ...formValues,
            estimatedate: e
        });
    }

    return (

        <div className={"modal fade "+ isOpenModal} data-backdrop="static" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                {
                    <div className="modal-dialog modal-fullscreen-sm-down modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header props">
                                <h5 className="modal-title modal-title-props" id="exampleModalLabel">
                                        Actualizar status
                                    {/* { itemDisplay }
                                    <div className="lockContainer" onClick={ handleLockUnLock }>
                                        <Lock state={ lock } className={'lockModal'} classIcon={'lockModalItem'} />
                                    </div> */}
                                </h5>
                                <button type="button" onClick={ onClose } className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body bodyClass">
                                <div className="modalPoster">
                                    { 
                                        <Img 
                                            width={ 100 } 
                                            height={ 100 }
                                            src={'assets/car.svg'} 
                                            alt='car' 
                                        />                                              
                                    }
                                    
                                </div>
                                <form onSubmit={ handleSubmit }>
                                    <div className="d-flex">
                                        Identificador Vehiculo: <span><b>{id}</b></span> 
                                    </div>
                                    <div> Status:  <b> { status } </b>  </div>
                                    <hr />
                                    
                                    <div className="w-100">
                                        <div>
                                            <div className="inputClass">
                                            Nombre:    
                                                <input 
                                                    className="form-control"
                                                    type="text" 
                                                    placeholder="Ingresar nombre"
                                                    name='name'
                                                    value={ name }
                                                    autoComplete="off"
                                                    onChange={ handleInputChange }
                                                />
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            Entrega :
                                            <div className="dateClass">
                                                <DateTimePicker
                                                    onChange={ handleEstimateDateChange }
                                                    value={ dateEnd }
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="d-flex w-100 justify-content-center">

                                        <button className="btn btn-primary m-2 w-100">Aceptar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                }
            </div>
            
    )
}
