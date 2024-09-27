import {useState}  from 'react'
import '../render/renderList.css'
export const ListRender = () => {
   const [lista] = useState(["carlos","Oscar","roberto","Tiago"])
  return (
  <div>
    {/* Vamos renderizar a lista em jsx abaixo */}
      <ul className='lista' >
     {lista.map((item,index)=>{
        return(
            <li key={index}>{item}</li>
        )
     })}
      </ul>
      
    
</div>)
};
