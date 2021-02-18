import React from 'react';

export const Img = ({ width, height, src, alt, handleClickImage }) => {
    const img = new Image().src = `${src}`;

    return (
        <>
            <img width={width}
                height={height} 
                src={ img }
                alt={ alt }
                onClick={ handleClickImage } 
            />
        </>
    )
}
