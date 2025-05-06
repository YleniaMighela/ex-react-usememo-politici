import React from 'react'

function CardList({ politico }) {


    return (
        <div className="card">
            <h2>{politico.name}</h2>
            <img src={politico.image} alt={politico.name} />
            <h4>{politico.position}</h4>
            <p>{politico.biography}</p>
        </div>
    )
}

export default CardList