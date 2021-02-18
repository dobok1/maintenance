import React from 'react'
import { Img } from '../../helpers/Img';
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { updateVehicleById } from '../../actions/vehicleAction';
import { useDispatch } from 'react-redux';

export const ModalVehicule = () => {

    const { openModal, vehicle } = useSelector(state => state.vehicle);
    const [ formValues, handleInputChange ] = useForm( {
        name:'prueba',
        finalDate: new Date()
    } );

    const dispatch = useDispatch();

    const { name, finalDate } = formValues;

    const isOpenModal = openModal ? 'show' : '';
    const { image, make, model, description, estimatedate,  id, km, _id } = vehicle;

    const onClose = () => {
        console.log('onClose clicked');
        /* dispatch(setItemSelected({}));
        dispatch(setPerks([])); */
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Se ha enviado la info', _id);
        dispatch(updateVehicleById( _id ));
    }


    return (

        <div className={"modal fade "+ isOpenModal} data-backdrop="static" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                {
                    <div className="modal-dialog modal-fullscreen-sm-down modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header props">
                                <h5 className="modal-title modal-title-props" id="exampleModalLabel">
                                        Update status vehicule
                                    {/* { itemDisplay }
                                    <div className="lockContainer" onClick={ handleLockUnLock }>
                                        <Lock state={ lock } className={'lockModal'} classIcon={'lockModalItem'} />
                                    </div> */}
                                </h5>
                                <button type="button" onClick={ onClose } className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body fondo p-0">
                                <div className="modalPoster">
                                    { 
                                            <Img 
                                                width={100 } 
                                                height={ 100 }
                                                src={image} 
                                                alt='c' 
                                            />                                              
                                    }
                                    
                                </div>
                                <form onSubmit={ handleSubmit }>
                                    Identificador del Vehiculo:
                                    {id}
                                    <hr />
                                    Nombre:
                                    <input 
                                        type="text" 
                                        placeholder="Ingresar nombre"
                                        name='name'
                                        value={ name }
                                        autoComplete="off"
                                        onChange={ handleInputChange }
                                    />
                                    <hr />
                                    Fecha de entrega:
                                    <input 
                                        type="text" 
                                        placeholder="Ingresar nombre"
                                        name='finalDate'
                                        value={ finalDate }
                                        autoComplete="off"
                                        onChange={ handleInputChange }
                                    />
                                    <hr />
                                    <button className="btn m-2">Aceptar</button>
                                </form>
                                {/* <div className="props-footer">
                                        <div className="button_Modal_Container">
                                
                                        </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                }
            </div>
            
    )
}
