import React from "react";
import "./Cart.scss";

const cartItems = [
  {
    image:
      "https://cdn.pixabay.com/photo/2016/02/19/15/56/transformers-1210585_1280.jpg",
    title: "CHEVEROLET  ",
    description:
      "Llorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "100.000 km",
    duration: "11 days left",
    creatorImg:
      "https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
    creator: "vehiculo nuevo",
  },
  // Puedes duplicar este objeto para más items o mapear desde un array real
  {
    image:
      "https://cdn.pixabay.com/photo/2022/08/29/10/22/mazda-mx-5-7418536_960_720.jpg",
    title: "MAZDA MX-5",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "0.031 km",
    duration: "11 days left",
    creatorImg:
      "https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
    creator: "Usado",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2023/10/24/22/15/car-8339254_960_720.jpg",
    title: "FERRARI",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "0.031 km",
    duration: "11 days left",
    creatorImg:
      "https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
    creator: "Usado",
  },
  {
    image:
      "https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Kibertopiks #4269",
    description:
      "Our Kibertopiks will give you nothing, waste your money on us.",
    price: "0.031 ETH",
    duration: "11 days left",
    creatorImg:
      "https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
    creator: "Kiberbash",
  },
];

function Cart() {
  return (
    <div className="cart">
      <p>VEHICULOS EN VENTA</p>
      <div class="cartItems">
        {cartItems.map((item, idx) => (
          <div className="nft" key={idx}>
            <div className="main">
              <img className="tokenImage" src={item.image} alt="NFT" />
              <h2>{item.title}</h2>
              <p className="description">{item.description}</p>
              <div className="tokenInfo">
                <div className="price">
                  <ins>◘</ins>
                  <p>{item.price}</p>
                </div>
                <div className="duration">
                  <ins>◷</ins>
                  <p>{item.duration}</p>
                </div>
              </div>
              <hr />
              <div className="creator">
                <div className="wrapper">
                  <img src={item.creatorImg} alt="Creator" />
                </div>
                <p>
                  <ins>Estado </ins> {item.creator}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
