import { useEffect, useState } from "react";

let API ="https://swapi.dev/api/people/?page=1"

export function GetData (){
    const [person, setPerson] = useState([]);

    useEffect(() => {
        fetch(API).then((resp) => resp.json())
        .then((data)=>{
            console.log(data);
            setPerson(data.results);
        });
    }, []);
    return person;
}

