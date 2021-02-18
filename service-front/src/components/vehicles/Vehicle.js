import React from 'react';
import { Img } from '../../helpers/Img';
import { useDispatch } from 'react-redux';
import { handleModal, vehicleSelected } from '../../actions/vehicleAction';

export const Vehicle = ({ car }) => {

    const dispatch = useDispatch();
    const { image, make, model, description, estimatedate,  id, km, _id } = car;

    const modalItem = ( car ) => {
        dispatch(handleModal(true));
        dispatch(vehicleSelected( car ))
    }

    return (
            <tbody>
                <tr>
                    <td><Img width='70' height='70' src={ image } alt='Car Image' /></td>
                    <td>{ make }        </td>
                    <td>{ model }       </td>
                    <td>{ description } </td>
                    <td>{ estimatedate }</td>
                    <td>{ id }          </td>
                    <td>{ km }          </td>
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
