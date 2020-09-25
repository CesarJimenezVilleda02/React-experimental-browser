import React from "react";

const Card = ({ name, email, id}) => {
    // Solo se puede regresar un elemento, en este caso el div
    return(
        <div class="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="photo" src={`https://robohash.org/${id}?100x100"`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;