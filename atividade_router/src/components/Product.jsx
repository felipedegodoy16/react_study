import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";
import Head from "./Head";

const Product = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch({
    url: "https://ranekapi.origamid.dev/json/api/produto/",
    id: id,
  });

  const brlFormatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="container gridProduct animeLeft">
      <Head title={`Ranek | ${data?.nome}`} />
      {loading && <Loading />}
      {error && <p>{error}</p>}
      {data && (
        <>
          <div className="imagesProduct">
            {data?.fotos.map((foto, index) => (
              <img key={index} src={foto.src} alt={foto.alt} />
            ))}
          </div>

          <div className="infosProduct">
            <h2>{data?.nome}</h2>
            <span className="price">{brlFormatter.format(data?.preco)}</span>
            <p>{data?.descricao}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
