import { useEffect, useState } from "react";
import MenuContainer from "../../Shared/Menu/MenuContainer";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const OurMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularData = data.filter((item) => item.category === "popular");
        setMenu(popularData);
      });
  }, []);

  return (
    <section className="my-8 md:my-20 px-4 md:px-20 lg:px-72 ">
      <SectionTitle
        heading={"Check it out"}
        title={"From our menu"}
      ></SectionTitle>
      <MenuContainer menu={menu} />
    </section>
  );
};

export default OurMenu;
