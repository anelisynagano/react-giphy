import React from 'react';

const SelectedGif = ({ selectedGif }) => {
    return(
        <div className='selectedGif'>
            <img src={selectedGif} alt="gif"/>
        </div>
    )
}

export default SelectedGif;