import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const url = 'http://localhost:3000/products';

  // Função para buscar os dados
  async function recData() {
    try {
      const data = await fetch(url);
      const res = await data.json();
      return res;
    } catch (error) {
      console.log('Erro ao buscar dados:', error);
    }
  }

  useEffect(() => {
    async function fetchProducts() {
      const result = await recData();
      if (result) {
        setProducts(result); // Atualiza o estado com os produtos
      }
      console.log(result)
    }

    fetchProducts(); // Chama a função ao montar o componente
  }, []); // Array vazio para que o efeito seja executado apenas uma vez

  return (
    <div className="App">
      <h1>Requisições HTTP</h1>

      {products.map((product) => (
        <ul key={product.id}>
      
          <li>{product.name }</li>

        </ul>


      ))}



    </div>
  );
}

export default App;
