import { useEffect } from "react";

const promesa = new Promise((resolve, reject) => {
  const productosArray = [
    { name: "Remera", precio: 20000, id: 1 },
    { name: "Pantalon", precio: 12500, id: 2 },
    { name: "Buzo", precio: 35000, id: 3 },
    { name: "Campera", precio: 55500, id: 4 },
  ];
  setTimeout(() => {
    productosArray.length > 0
      ? resolve(productosArray)
      : reject({ data: [], message: "no hay productos" });
  }, 5000);
});

useEffect(() => {
  promesa
    .then((res) => {
      console.log(res);
      setProducts(res);
    })
    .catch((error) => console.error(error.menssage));
}, []);

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <h2 className="saludo">{greeting}</h2>
      {Products.map(prod => <p>{prod.name} {prod.precio}</p>)}
    </>
  );
};

export default ItemListContainer;
