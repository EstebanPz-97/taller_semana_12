import React, { useEffect, useState } from 'react'

export default function Components2() {

    const API = "https://swapi.dev/api/";
    const [api,setApi] = useState([])

    useEffect(()=>{
        fetch(API)
        .then((response)=>response.json())
        .then((data)=>{
            setApi(data)
        })
    })


    return (
        <div>
            <button onClick={()=> console.log(api)}> Vamos a la API </button>
        </div>
    )
}
