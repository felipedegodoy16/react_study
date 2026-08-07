import React from "react";

function Produto({ produto }) {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if (produto)
      fetch("https://ranekapi.origamid.dev/json/api/produto/" + produto)
        .then((response) => response.json())
        .then((json) => setDados(json));
  }, [produto]);

  if (!dados) return null;
  return (
    <>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
    </>
  );
}

export default Produto;
