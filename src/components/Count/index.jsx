import './count.css';
import { useState } from 'react';
 
export default function Count() {
    const [contador, setContador] = useState(0);

    return(
        <div className="counter">
            <button onClick={() => setContador(contador +1)}>Incremento</button>
                <h1>contador {contador}</h1>
            <button onClick={() => setContador(contador -1)}>Decremento</button>
        </div>
    )
};