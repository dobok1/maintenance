import React from 'react';
import { Img } from '../../helpers/Img';
import { useDispatch } from 'react-redux';
import { handleModal, vehicleSelected } from '../../actions/vehicleAction';
import moment from 'moment';

export const Vehicle = ({ car }) => {

    const dispatch = useDispatch();
    const { image, make, model, description, estimatedate,  id, km, status, _id } = car;
    const dateEndFormat = estimatedate ? moment(estimatedate).format('YYYY/MM/DD') : estimatedate;
    /* console.log('estimatedate:', estimatedate, typeof estimatedate);
    const dateEndFormat = estimatedate ; */

    const modalItem = ( car ) => {
        dispatch(handleModal(true));
        dispatch(vehicleSelected( car ))
    }

    return (
            <tbody>
                <tr className={ status === 'maintenance' ? 'statusVehicule' :''}>
                    <td><Img width='70' height='70' src={ image } alt='...' /></td>
                    <td>{ make }        </td>
                    <td>{ model }       </td>
                    <td>{ description } </td>
                    <td>{ dateEndFormat }</td>
                    <td>{ id }          </td>
                    <td>{ km }          </td>
                    <td>{ status }          </td>
                    <td className="text-center"> 
                        <div id={_id}
                            href="#exampleModal" 
                            type="button" 
                            data-bs-toggle="modal"    
                            data-bs-target="#exampleModal"
                            className={'itemContainer'} 
                            onClick={ () => modalItem( car ) }>
                                <img width="25" height="25" src="./assets/refresh.svg" />
                        </div>
                    </td>
                </tr>
            </tbody>
    )
}
