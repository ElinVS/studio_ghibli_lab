import React from "react"


const FilmDetail = ({selectedFilm}) => {

    return(

        <>
            <li> Title: {selectedFilm.original_title}</li>
            <img id="movie-img" src={selectedFilm.image} alt='movie-banner'/>
            <li>Description: {selectedFilm.description}</li>
            <li>Release Date: {selectedFilm.release_date}</li> 
            <li></li>  
        </>
        


    )
        
    
}


export default FilmDetail


// {movie banner ,originaltitle, description, release date}
