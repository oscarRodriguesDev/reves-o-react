import { UserDetails } from "./userDetails"

export const Projeto=()=>{
    const obj = [{nome:'Oscar',idade:17,profissao:'marceneiro'},{nome:'Claudio',idade:19,profissao:'marceneiro'},{nome:'Cassio',idade:16,profissao:'marceneiro'},{nome:'Patricia',idade:15,profissao:'marceneiro'}]
    return(
        <div className="projeto">
            <h1>Projeto</h1>

            {obj.map((item)=>(
                <>
                <UserDetails
                nome={item.nome}
                idade ={item.idade}
                profissao={item.profissao}
                
                />
             
                </>
            ))}

        </div>
    )
}