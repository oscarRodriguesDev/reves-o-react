import {useState} from 'react'

export const RenderCondicional= ()=>{

    const [x] = useState(false)
    return(
        <div>
         {x && <h1>Valor é true</h1>}
         {!x && <h1>Valor é false</h1>}
        </div>
    )
}