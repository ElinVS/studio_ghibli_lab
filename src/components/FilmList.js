import React, {useState} from "react"
import Film from "./Film"

const Filmlist = ({films, onFilmClick, saveFavourite}) => {


    const filmArray = films.map((film,index)=>{
        return <Film film= {film} key={index} onFilmClick={onFilmClick} saveFavourite={saveFavourite}/>  

    })

    return(
        <>

        <table>
            <tr>
                <td>
                {filmArray}

                </td>
            </tr>
        </table>
            {/* <ul>
                
            </ul> */}

    

            
        </>
    )
}



export default Filmlist