import useFetchData from "./useFetchData.js";


export default function DataView() {
  const data = useFetchData("https://api.github.com/search/users?q=microsoft+type:org");
  return data?.map((data) => <img src={data.avatar_url}
                                  key={data.id}
                                  style={{width: "100px", height: "100px"}}
                                  alt="Repo" />);
}
