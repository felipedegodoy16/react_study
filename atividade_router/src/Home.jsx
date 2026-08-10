import { Link } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import Loading from "./components/Loading";
import Head from "./components/Head";

const Home = () => {
  const { data, loading, error } = useFetch({
    url: "https://ranekapi.origamid.dev/json/api/produto",
  });

  return (
    <div className="container flexHome animeLeft">
      <Head title="Ranek | Início" />
      {loading && <Loading />}
      {error && <p>{error}</p>}
      {data &&
        data.map((product) => (
          <div className="cardProduct" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.fotos[0].src} alt={product.fotos[0].alt} />
            </Link>
            <h3>{product.nome}</h3>
          </div>
        ))}
    </div>
  );
};

export default Home;
