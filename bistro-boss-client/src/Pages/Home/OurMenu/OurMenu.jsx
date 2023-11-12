import { useEffect, useState } from "react";
import MenuContainer from "../../Shared/Menu/MenuContainer";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import BlackBorderBtn from "../../Components/Buttons/BlackBorderBtn";

const OurMenu = () => {
  const [menu, setMenu] = useState([]);
  const [viewAll, setViewAll] = useState(false);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        if (!viewAll) {
          const popularData = data.filter(
            (item) => item.category === "popular"
          );
          setMenu(popularData);
        } else {
          setMenu(data);
        }
      });
  }, [viewAll]);

  return (
    <section className="text-center my-8 md:my-20 px-4 md:px-20 lg:px-72 ">
      <SectionTitle
        heading={"Check it out"}
        title={"From our menu"}
      ></SectionTitle>
      <MenuContainer menu={menu} />
      <button onClick={() => setViewAll(!viewAll)}>
        <BlackBorderBtn value={viewAll ? "Popular Menu" : "View Full Menu"} />
      </button>
    </section>
  );
};

export default OurMenu;
