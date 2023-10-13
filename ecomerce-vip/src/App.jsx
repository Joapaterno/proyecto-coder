import { useState } from "react";
import "./App.css";
import NavBar from "./components/navBar/navBar";
import CartWidget from "./components/cartWidget/cartWidget";
import ItemListContainer from "./components/itemListContainer/itemListContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hola, Bienvenido a nuestro ecommerce" />
    </>
  );
}

export default App;
