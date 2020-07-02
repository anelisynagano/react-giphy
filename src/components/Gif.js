import React from 'react';

const Gif = ({ gif, handleSelectGif }) => {
    return(
        <div className='gif' onClick={() => handleSelectGif(gif.images.downsized_large.url)}>
            <img src={gif.images.downsized_large.url} alt="gif"/>
        </div>
    )
}

export default Gif;