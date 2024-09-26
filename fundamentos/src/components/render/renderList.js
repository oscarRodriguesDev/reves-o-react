import {useState}  from 'react'
import '../render/renderList.css'
export const ListRender = () => {
   const [lista] = useState(["carlos","Oscar","roberto","Tiago"])
  return (
  <div>
    {/* Vamos renderizar a lista em jsx abaixo */}
      <ul className='lista' >
     {lista.map((item)=>{
        return(
            <li key={item}>{item}</li>
        )
     })}
      </ul>
      
    
</div>)
};
