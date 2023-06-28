import React from "react";
import { Product } from "./Product";
import "./ProductList.css";
import dataset from "../data/data.json";

export const ProductList = () => {
  return (
    <div className="cards">
      {dataset.map((data) => (
        <Product className="item"
          name={data.name}
          image={data.imageURL}
          desc={data.desc}
          price={data.price}
        />
      ))}
    </div>
  );
};
