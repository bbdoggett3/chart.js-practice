import React from "react";
import { Typewriter } from 'react-typewriting-effect'
import 'react-typewriting-effect/dist/index.css'

function Typing() {
return(
    <div>
        <Typewriter string='This is an example of typewriting 😄' delay={80} />
    </div>
)

}

export default Typing;