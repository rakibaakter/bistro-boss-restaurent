import { useEffect, useState } from "react";
import MenuContainer from "../../Shared/Menu/MenuContainer";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import BlackBorderBtn from "../../Components/Buttons/BlackBorderBtn";
import useMenu from "../../../Hooks/useMenu";

const OurMenu = () => {
  const [menu] = useMenu();
  const [viewAll, setViewAll] = useState(false);

  const popularMenu = menu.filter(
    (popularItem) => popularItem.category === "popular"
  );

  return (
    <section className="text-center ">
      <SectionTitle
        heading={"Check it out"}
        title={"From our menu"}
      ></SectionTitle>
      <MenuContainer menu={viewAll ? menu : popularMenu} />
      <button onClick={() => setViewAll(!viewAll)}>
        <BlackBorderBtn value={viewAll ? "Popular Menu" : "View Full Menu"} />
      </button>
    </section>
  );
};

export default OurMenu;
