import React from 'react';

export const Img = ({ width, height, src, alt, handleClickImage }) => {
    return (
        <>
            <img
                width={width}
                height={height}
                src={src}
                alt={alt}
                onClick={ handleClickImage }
            />
        </>
    )
}
