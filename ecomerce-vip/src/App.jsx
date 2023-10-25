import { useState } from "react";
import "./App.css";
import NavBar from "./components/navBar/navBar";
import CartWidget from "./components/cartWidget/cartWidget";
import ItemListContainer from "./components/itemListContainer/itemListContainer";


function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <NavEar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />}/>
        <Route path="/category.id" element={<ItemListContainer />}/>
        <Route path="/item:id" element={<ItemListContainer />}/>
        <ItenListcontather />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
