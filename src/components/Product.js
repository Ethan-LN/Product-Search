import React from "react";
import { useState } from "react";
import "./Product.css";

export const Product = (props) => {
  const defaultImage =
    "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80";
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(defaultImage);

  return (
    <div className="card">
      <img src={props.image} alt="Product Image" />
      <p>{props.name}</p>
      <p>{props.desc}</p>
      <p>$ {props.price}</p>
    </div>
  );
};
