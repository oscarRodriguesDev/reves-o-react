
import './App.css';
import {useState,useEffect} from 'react'


function App() {
  const [products,setProducts]=  useState([]);
  const url = 'http://localhost:3000/products'

  
  async function recData(){
   
    try{
      const data = await fetch(url)
      const res = await data.json()
      return res
  
    }catch(error){
      console.log('erro')
    }
  }

useEffect(() => {
  setProducts(recData());
  if(products){

    setProducts(recData());
    console.log(products)
  }

},[])


  return (
    <div className="App">
     <h1>Requisições http</h1>
     
    </div>
  );
}

export default App;

//inicializar o servidor
