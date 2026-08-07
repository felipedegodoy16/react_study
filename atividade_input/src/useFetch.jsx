import React from "react";

function useFetch(url, options) {
  const [data, setData] = React.useState();
  fetch(url, options);
}
