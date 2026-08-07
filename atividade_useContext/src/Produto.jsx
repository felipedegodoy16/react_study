import React from "react";
import { GlobalContext } from "./GlobalContext.js";

function Produto() {
  const global = React.useContext(GlobalContext);

  if (!global.dados) return null;

  return (
    <>
      Produto:{" "}
      <ul>
        {global.dados.map((produto) => (
          <li key={produto.nome}>{produto.nome}</li>
        ))}
      </ul>
      <button onClick={global.limparDados}>Limpar dados</button>
    </>
  );
}

export default Produto;
