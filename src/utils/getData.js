import { useEffect,useState } from "react"
const useDatos = () => {
    const API = 'https://swapi.dev/api/people/?search=r2'
    const[result, dataResult]= useState(null)

    useEffect(() => {
       fetch (API).then(response => response.json()).then(data =>
         { dataResult(data)
         data.results.map( result=> console.log(result));
         })     
        
   

        
    }, [])

        return result;
        

    
        
    }

export default useDatos;
 