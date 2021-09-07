import HandleProduct from "../Product";
import "./style.css";

function HandleItemContainer({ productList, handleClick }) {
  return (
    <div className="main__Container">
      {productList.map((element) => {
        return (
          <HandleProduct
            key={element.id}
            id={element.id}
            name={element.name}
            category={element.category}
            price={element.price}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
}

export default HandleItemContainer;
