// import React from "react";
import Produto from "./Produto";
import { GlobalStorage } from "./GlobalProvider.jsx";

function App() {
  return (
    <>
      <GlobalStorage>
        <Produto />
      </GlobalStorage>
    </>
  );
}

export default App;
