import React, {useState} from 'react'

function GifSearch({changeQuery}) {

    const [query, setQuery] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        changeQuery(query)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search term">Enter a Search Term:</label>
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
                <button type="submit">Find Gifs</button>
            </form>
        </div>
    )

}


export default GifSearch