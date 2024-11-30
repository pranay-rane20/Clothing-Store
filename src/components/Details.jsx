import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../utils/axios";
import Loading from "./Loading";

const Details = () => {
  const [products, setproducts] = useState(null);
  const { id } = useParams();
  console.log(id);

  const getsingleproduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setproducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getsingleproduct();
  }, []);
  return products ? (
    <div className="w-[70%] h-full m-auto p-[10%] flex justify-between items-center">
      <img
        className="object-contain w-[50%] h-[90%] mr-[10%]"
        src={`${products.image}`}
        alt=""
      />
      <div className="content w-[80%]">
        <h1 className="text-3xl">{products.title}</h1>
        <h2 className="text-zinc-400 my-5">{products.category}</h2>
        <h2 className="text-red-400 mb-3">{products.price}</h2>
        <p className="mb-[5%]">{products.description}</p>
        <Link className="px-3 py-1 rounded-md text-white bg-blue-400 border border-black hover:bg-black transition-all ease-linear mr-5">
          Edit
        </Link>
        <Link className="px-3 py-1 rounded-md text-white bg-blue-400 border border-black hover:bg-black transition-all ease-linear">
          Delete
        </Link>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
