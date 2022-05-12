import React from "react";


const Film = ({film, onFilmClick, saveFavourite}) => {

const handleClick = function(){
    onFilmClick(film)
}

const handleButton = function() {
    saveFavourite(film)
       
}



    return(
        <>
        <h2 onClick={handleClick}>{film.title}</h2>
        <button onClick={handleButton} > &hearts;</button> 
        </>
    )
}



export default Film