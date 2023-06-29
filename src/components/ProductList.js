import React, { useState } from "react";
import { Product } from "./Product";
import "./ProductList.css";
import dataset from "../data/data.json";

export const ProductList = () => {
  const [products, setProducts] = useState(dataset);

  const filterShirts = () => {
    setProducts(
      dataset.filter((data) => {
        return data.category === "Shirts";
      })
    );
  };
  const filterPants = () => {
    setProducts(
      dataset.filter((data) => {
        return data.category === "Pants and Skirts";
      })
    );
  };
  const filterJacket = () => {
    setProducts(
      dataset.filter((data) => {
        return data.category === "Jacket";
      })
    );
  };

  const removeFilter = () => {
    setProducts(dataset);
  };

  return (
    <div className="products__panel">
      <div className="btns__group">
        <button onClick={removeFilter}>All Products</button>
        <button onClick={filterShirts}>Shirts</button>
        <button onClick={filterPants}>Pants and Skirts</button>
        <button onClick={filterJacket}>Jacket</button>
      </div>
      <div className="cards">
        {products.map((data) => (
          <Product
            className="item"
            name={data.name}
            image={data.imageURL}
            desc={data.desc}
            price={data.price}
          />
        ))}
      </div>
    </div>
  );
};
