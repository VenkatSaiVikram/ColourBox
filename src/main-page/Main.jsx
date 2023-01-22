import React from 'react';
import ColourBox from './Main/ColourBox';
import Input from './Main/Input';
import { useState } from "react";

function Main() {

    const [color, setColor] = useState("White");

    return (
        <main>
            <ColourBox color={ color } />
            <Input setColor={ setColor } />
        </main>
    )

}

export default Main