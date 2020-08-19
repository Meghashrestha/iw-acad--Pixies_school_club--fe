import React from 'react'

const Event = ({ items, isLoading }) => {
    return isLoading ?( 
    <h1>Loading...</h1>
    ) : (
    <section>
        {items.map(item =>(
            <p>{item.name}</p>
        ))}
    </section>

    )
}

export default Event
