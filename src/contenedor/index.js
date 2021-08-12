import './contenedor.css'
import { GetData } from '../data/getData';

export const Contenedor = () => {
    let persons =GetData();
    console.log(persons);
     return (
         < div>
         {persons.map((person)=>(
             <div key={person.mass}>
            <div>{person.name}</div>
            </div>

         ))}
         
         
         </div>
     );
};