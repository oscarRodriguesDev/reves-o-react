export  const  RenderProps = (props)=>{
  return(
    <div>
    <h1>Recebendo valore de props: {props.value}</h1>
    <p>O seu nome é {props.name}</p>
    </div>
  )
}