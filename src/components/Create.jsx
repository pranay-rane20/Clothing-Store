import React, { useContext, useState } from "react";
import { ProductContext } from "../utils/context";
import { nanoid} from "nanoid";
import { useNavigate } from "react-router-dom";

const Create = () => {

  const navigate = useNavigate();
  const [products, setproducts] = useContext(ProductContext);
  const [title, setTitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const AddProductHanbdler = (e) => {
    e.preventDefault();
    if(title.trim().length < 5 || image.trim().length < 5 || description.trim().length < 5 || price.trim().length < 1){
        alert("All fields should be at least 5 characters long");
        return;
    }
    const product = {id: nanoid(), title, image, category, price, description };
    setproducts([...products, product])
    navigate("/")
    
  };
  return (
    <form
      onSubmit={AddProductHanbdler}
      className="flex flex-col items-center p-[5%] w-screen h-screen"
    >
      <h1 className="mb-5 w-1/2 text-3xl">Add New Products</h1>
      <input
        type="url"
        placeholder="image link"
        className="text-xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setimage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="title"
        className="text-xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <div className="flex justify-between w-1/2">
        <input
          type="text"
          placeholder="category"
          className="text-xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={(e) => setcategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="price"
          className="text-xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        onChange={(e) => setdescription(e.target.value)}
        className="text-xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        placeholder="Enter product description here"
        value={description}
        rows="10"
      ></textarea>
      <div className="w-1/2">
        <button className="py-2 px-5 border border-blue-200 text-blue-500 rounded">
          Add new Product
        </button>
      </div>
    </form>
  );
};

export default Create;
