import React from 'react'

function ColourBox({ color }) {

    return (

        <div className="colour-box" style={{backgroundColor: color}}>
            <h2>{ color !== "" ? color : "White" }</h2>
        </div>
    
    )

}

export default ColourBox;