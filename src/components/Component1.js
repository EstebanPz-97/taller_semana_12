import React, { useState } from 'react'
import "../assets/css/componet1.css"

export default function Component1() {

    const [view,setView] = useState("");


    return (
        <div className="component1">
            <button onClick={() => setView("Bienvenido a la semana 12 - cierre alterU")}>Algo sucedera</button>
            <h1>{view}</h1>
            <button onClick={() => setView("")}>Algo desaparecera</button>
        </div>
    )
}
