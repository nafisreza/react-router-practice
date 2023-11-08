import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()

/*
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/nafisreza")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
*/

  return (
    <div className="flex justify-center bg-gray-700 p-5">
      <img className="rounded-full" width="200px" src={data.avatar_url} alt="" />
      <p className="mt-20 ml-5 text-white font-semibold">
        Github Followers: {data.followers}
      </p>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch ('https://api.github.com/users/nafisreza')
    return response.json()
}