import React, { useState } from 'react'
import MovieItems from './MovieItems'

export default function Movie() {
    const [link,setLink]=useState({
        titles:[]
    })
    fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=eb855418051d34716ceb757b6ba4b374')
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        setLink({
        titles:data.results
    })})

    return (
        <>
            <div className="flexing">
                {link.titles.map((element) => {
                    return <div key={element.id}>
                        <MovieItems title={element.original_title} url={element.backdrop_path} rating={element.vote_average} linkurl={element.backdrop_path}/>
                    </div>
                })
                }
            </div>
        </>
    )
}
