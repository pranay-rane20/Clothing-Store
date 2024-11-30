import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/context";
import Loading from "./Loading";
import axios from "../utils/axios";


const Home = () => {
  const [products] = useContext(ProductContext);

  const {search} = useLocation();
  const category = decodeURIComponent(search.split('=')[1]);
  // console.log(category);
  
  const [filteredProducts, setfilteredProducts] = useState(null);
  
  const getProductsCategory = async () => {
    try {
      const {data} = await axios.get(`/products/category/${category}`)
      setfilteredProducts(data)
      
    } catch (error) {
      console.log(error);
      
    }
  }

  
  useEffect(() => {
    if(!filteredProducts || category == 'undefined')setfilteredProducts(products);
    if(category != "undefined" ) getProductsCategory();
  },[category,products])

  console.log(filteredProducts)
  
  return products ? (
    <>
    <Nav />
      <div className="w-[85%] p-10 pt-[5%] flex flex-wrap gap-2 overflow-x-hidden overflow-y-auto">
        {filteredProducts && filteredProducts.map((p,i) => <Link key={i} to={`/details/${p.id}`} className="card p-5 border shadow rounded w-[20%] h-[35vh] flex flex-col justify-center items-center">
          <div
            className="hover:scale-110 mb-5 w-full h-[80%] bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage:
                `url(${p.image})`,
            }}
          ></div>
          <h1 className="text-sm text-center">{p.title}</h1>
        </Link>)}
        
      </div>
    </>
  ) : <Loading />;
};

export default Home;
