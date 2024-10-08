export const UserDetails=({nome,idade, profissão})=>{
    return(
        <div>
         <h3>Detalhes do usuário</h3>
         <p>Nome: {nome}</p>
         <p>Idade: {idade}</p>
         <p>Profissão: {profissão}</p>
         {idade>=18?
         <p>Usuario pode tirar carteira de identiade</p>:
         <p>Usuario não pode tirar carteira de identidade</p>
         }

         
        </div>
    )
}