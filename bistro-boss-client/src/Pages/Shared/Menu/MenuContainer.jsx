import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

const MenuContainer = ({ menu }) => {
  console.log(menu);
  return (
    <div className="grid md:grid-cols-2 gap-4 lg:gap-12 my-8 md:my-12 px-4 md:px-20 lg:px-72 ">
      {menu.map((item) => (
        <ItemCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default MenuContainer;
