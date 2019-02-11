import React from 'react';

const GifContainer = (props)=>{

    const gifList = props.gifList.map((gif, i)=>{
        return (
            <li key={i}>
                <img src={gif.images.original.url} alt={gif.title} />
            </li> 
        )
    })
    return(
        <div className="gif-dump">
            <h1>These are the GIFs</h1>
            <ul>
                {gifList}
            </ul>
        </div>
    )
}

export default GifContainer;