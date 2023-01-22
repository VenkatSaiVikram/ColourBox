import React from 'react'

function Input({ setColor }) {

    return (

        <div className="colour-input">
            <input 
            id="colour-input"
            type="text" 
            placeholder="Enter Your Color" 
            onChange={ (e) => setColor(e.target.value) }
            />
        </div>

    )

}

export default Input;