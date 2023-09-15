import React from "react";

export default function DataView({ data }) {
  return data?.map((data) => <img src={data.avatar_url} key={data.id} alt="Repo" />);
}
