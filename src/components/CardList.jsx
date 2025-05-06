import React from 'react'

function CardList({ politico }) {
    console.log(politico.name);


    return (
        <div className="card">
            <h2>Nome: {politico.name}</h2>
            <img src={politico.image} alt={politico.name} />
            <h4> Posizione: {politico.position}</h4>
            <p><strong> Biografia:</strong>{politico.biography}</p>
        </div>
    )
}

export default React.memo(CardList)