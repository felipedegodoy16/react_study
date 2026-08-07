import React from "react";
import Produto from "./Produto";

function App() {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem("produto");
    if (produtoLocal) setProduto(produtoLocal);
  }, []);

  React.useEffect(() => {
    if (produto) window.localStorage.setItem("produto", produto);
  }, [produto]);

  function handleClick(e) {
    setProduto(e.target.innerText);
  }

  return (
    <>
      <h1>Preferência: {produto}</h1>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      <Produto produto={produto} />
    </>
  );
}

export default App;
