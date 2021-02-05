import React from "react"


function GifList ({gifs}) {

    const gifsList = gifs.map(gif => {
        return (
            <li key={gif.id}>
                <img src={gif.images.fixed_width_small.url} alt={gif.title} />
            </li>
        )
    })

    return (
        <div>
            <ul>
                {gifsList}
            </ul>
        </div>
    )


}

export default GifList