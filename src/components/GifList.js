import React from 'react';
import Gif from './Gif';

const GifList = ({ gifs, handleSelectGif }) => {
    return(
        <div className='gifContainer'>
            { gifs.map(gif => <Gif handleSelectGif={handleSelectGif} gif={gif} key={gif.embed_url} />) }

        </div>
    )
}

export default GifList;