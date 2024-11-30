import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/context";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const [products] = useContext(ProductContext);

  let distinct_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)];

  const color = () => {
    return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.4)`
  }

  

  return (
    <nav className="w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5">
      <a
        className="py-2 px-5 border border-blue-200 text-blue-500 rounded"
        href="/create"
      >
        Add new Product
      </a>
      <hr className="w-[80%] my-3" />
      <h1 className="text-2xl w-[85%] mb-3">Category Filter</h1>
      <div className="w-[80%]">
        {distinct_category.map((c, i) => (
          <Link to={`/?category=${c}`} key={i} className="mb-3 flex items-center">
            <span style={{backgroundColor: color()}} className="rounded-full mr-2 w-[13px] h-[13px]">
              {" "}
            </span>
            {c}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
