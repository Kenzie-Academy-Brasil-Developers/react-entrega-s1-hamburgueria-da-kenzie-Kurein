import { useState } from "react";
import HandleItemContainer from "./components/MenuContainer";
import "./App.css";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
    { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
    { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
    { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
    { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
    { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [userInput, setUserInput] = useState([]);

  function showProducts(str) {
    if (str !== undefined) {
      setProducts(
        products.filter(
          (element) => element.name.toUpperCase() === str.toUpperCase()
        )
      );
    }
  }

  function handleClick(productId) {
    const product = products.find((element) => element.id === productId);

    if (currentSale.includes(product) !== true) {
      setCurrentSale([...currentSale, product]);
    }
  }

  const totalPrice = currentSale.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);

  return (
    <div className="App">
      <form className="appForm" onSubmit={(event) => event.preventDefault()}>
        <input
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
          className="formInput"
        />
        <button className="fomrButton" onClick={() => showProducts(userInput)}>
          Pesquisar
        </button>
      </form>

      <HandleItemContainer productList={products} handleClick={handleClick} />

      <div className="cartDiv">
        <h2>Total no carrinho - {totalPrice.toFixed(2)}R$</h2>
        <HandleItemContainer productList={currentSale} />
      </div>
    </div>
  );
}

export default App;
