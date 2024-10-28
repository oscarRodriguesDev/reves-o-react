import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [id, setId] = useState(0);
  const [name,setName]= useState('Calça xadrez')
  const [price, setPrice] = useState('0,00');
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
        // Atualiza o ultimoId com o maior ID encontrado nos produtos
        const maxId = result.reduce((max, product) => Math.max(max, product.id), 0);
        setId(maxId + 1); // Incrementa 1 para o próximo ID
      }
      console.log(result);
    }

    fetchProducts(); // Chama a função ao montar o componente
  }, []); // Array vazio para que o efeito seja executado apenas uma vez

  // Função para enviar produtos para o banco de dados JSON
  const handleSubmit = async (event) => {
    event.preventDefault();
    const product= {
      id,
      name,
      price
    }

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
      console.log(product)
  };

  return (
    <div className="App">
      <h1>Requisições HTTP</h1>
      {
        products.map((product) => (
          <ul key={product.id}>
            <li>{product.name}</li>
          </ul>
        ))
      }

      <form onSubmit={handleSubmit}>
        <label>
          <p>Id</p>
          <input type="number" readOnly value={id} />
        </label>
        <label>
          <p>Name</p>
          <input type="text" placeholder={name} onChange={(e)=>{setName(e.target.value)}}/>
        </label>
        <label>
          <p>Price</p>
          <input type="text" placeholder={price} onChange={(e)=>{setPrice(e.target.value)}} />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
