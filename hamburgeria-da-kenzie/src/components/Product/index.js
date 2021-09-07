import "./style.css";

function HandleProduct({ id, name, category, price, handleClick }) {
  let button;

  if (handleClick !== undefined) {
    button = (
      <button className="addButton" onClick={() => handleClick(id)}>
        Adicionar
      </button>
    );
  }

  return (
    <div className="product__div">
      <div className="product__details">
        <h3>{name}</h3>
        <p>Categoria - {category}</p>
        <p>Preço - {price} R$</p>
      </div>
      {button}
    </div>
  );
}

export default HandleProduct;
