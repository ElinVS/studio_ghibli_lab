import React, {useState, useEffect} from "react"
// import Film from "../components/Film";
import FilmDetail from "../components/FilmDetail";
import FilmList from "../components/FilmList"
// import FavouriteContainer from "./FavouriteContainer";

const GhibliContainer = () => {

    const [films,setFilms] = useState ([]);
    const [selectedFilm, setSelectedFilm] = useState (null)
    const [favourites, setFavourites] = useState([])

    useEffect(()=> {
        getFilms();
    },[])


    const getFilms = function(){
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => response.json())
        .then(films => setFilms(films))
    }

    // const getCharacters = function(){
    //     fetch('https://ghibliapi.herokuapp.com/films'['people'])
    //     .then(response => response.json())
    //     .then(characters => setCharacters(characters))

    // }

    // Promise.all([getFilms, getCharacters]).then((values) => {
    //     return values
    // })




    const onFilmClick = function(film) {
        setSelectedFilm(film)
    }

    const saveFavourite = ((film) => {
       
        const copyFavourite = [...favourites]
        if(copyFavourite.indexOf(film) === -1){
        copyFavourite.push(film)}
        setFavourites(copyFavourite)
        
    })


    const favouritesArray = favourites.map((film)=>{
        return (
            <>
            <li>{film.title}</li>
            </>
        )

    })


    return(
        <>
        <FilmList films={films} onFilmClick={onFilmClick} saveFavourite={saveFavourite}/>
        {selectedFilm ? <FilmDetail selectedFilm={selectedFilm}/> : null}

        <ul>Favourites:{favouritesArray}</ul>

        {/* <FavouriteContainer></FavouriteContainer> */}
        </>
        
        
    )
}



export default GhibliContainer