import React, {useEffect, useState} from 'react'
import GifSearch from "./GifSearch"
import GifList from "./GifList"

function GifListContainer ({}) {

    const [gifs, setGifs] = useState([])

    useEffect(() => {
        fetchGifs()
        }, [])
    
    
    function fetchGifs(query = "dolphins") {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
            .then((r) => r.json())
            .then((data) => {
                setGifs(data.data)
            })
    }

    return (
        <div>
            <GifSearch  
                changeQuery={fetchGifs}
            />
            <GifList gifs={gifs} />
        </div>
    )

}


export default GifListContainer