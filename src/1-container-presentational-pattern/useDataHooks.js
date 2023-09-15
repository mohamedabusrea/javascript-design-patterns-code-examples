import { useState, useEffect } from "react";

export default function useFetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.github.com/search/users?q=microsoft+type:org");
      const {message} = await res.json();
      setData(message);
    }

    fetchData();
  }, []);

  return data;
}
