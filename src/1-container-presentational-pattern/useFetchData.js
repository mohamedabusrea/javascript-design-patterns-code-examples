import { useState, useEffect } from "react";

export default function useFetchData(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const {items} = await res.json();

      setData(items);
    }

    fetchData();
  }, []);

  return data;
}
