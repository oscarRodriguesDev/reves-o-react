import {useState} from 'react'

export const RenderCondicional= ()=>{

    const [x] = useState(false)

    const [name] = useState('Joãod')
    return(
        <div>
         {x && <h1>Valor é true</h1>}
         {!x && <h1>Valor é false</h1>}

         {/* vamos exibir algo se op name for joão ou não */}

          <div>
            <h1>If ternario</h1>
            {name ==='João' ? (<p>João</p>):(<p>Nome diferente de joão</p>) }
          </div>
        </div>
    )
}