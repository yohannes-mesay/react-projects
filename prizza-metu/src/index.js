import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  // const style={color:"blue",fontSize:"50px"}
  return (
    <header className="header">
      <h1>Pizza de amino</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizza = pizzas.length;

  return (
    <main className="menu">
      <h2>OUR MENU</h2>
      {numPizza > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} />
          ))}
        </ul>
      ) : (
        <p>"We are working on Our menu: Please Come back later:"</p>
      )}
    </main>
  );
}

function Pizza({pizzaObj}) {
  return (
    <li className={`pizza ${pizzaObj.soldOut?"sold-out":""}`}>
      <img src={pizzaObj.photoName} alt="margherita"></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT":pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const time = new Date().getHours();
  const openHr = 9;
  const closeHr = 24;
  const isOpen = time >= openHr && time <= closeHr;

  return (
    <footer className="footer">
        {isOpen ? (
          <Order closeHr={closeHr}/>
        ) : (
          <p>
            We Are Happy to Welcome You between {openHr}:00 and {closeHr}:00
          </p>
        )}
    </footer>
  );
}
function Order({closeHr}) {
  return (<div className="order">
    <p>We're Currently Open. The closing Hour is {closeHr}:00</p>
          <button className="btn">Order</button>
  </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//******************************************************************************************************************************************* */

