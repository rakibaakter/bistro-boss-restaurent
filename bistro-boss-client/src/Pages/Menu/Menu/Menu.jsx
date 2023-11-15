import useMenu from "../../../Hooks/useMenu";
import bannerImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";

import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuContainer from "../../Shared/Menu/MenuContainer";
import ParallaxBg from "../../Shared/ParallaxBG/ParallaxBg";
import BlackBorderBtn from "../../Components/Buttons/BlackBorderBtn";
import { Helmet } from "react-helmet-async";

const Menu = () => {
  const [menu] = useMenu();

  const btnValue = "order your favourite food";
  const offeredMenu = menu.filter((offered) => offered.category === "offered");
  const dessertsMenu = menu.filter((dessert) => dessert.category === "dessert");
  const saladMenu = menu.filter((salad) => salad.category === "salad");
  const pizzaMenu = menu.filter((pizza) => pizza.category === "pizza");
  const soupMenu = menu.filter((soup) => soup.category === "soup");

  const bannerTitle = "Our Menu";
  const bannerDescription = "Would you like to try a dish?";

  const dessertTitle = "Desserts";
  const pizzaTitle = "pizza";
  const soupTitle = "Soup";
  const saladTitle = "salad";
  const description =
    "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <ParallaxBg
        img={bannerImg}
        title={bannerTitle}
        description={bannerDescription}
      />
      {/* offered section */}
      <section className="text-center mb-20">
        <SectionTitle
          heading={"Don't miss"}
          title={"TODAY'S Offer"}
        ></SectionTitle>
        <MenuContainer menu={offeredMenu} btnValue={btnValue} />
      </section>
      {/* desserts section */}
      <section className="text-center mb-20">
        <ParallaxBg
          img={dessertImg}
          title={dessertTitle}
          description={description}
        />
        <MenuContainer menu={dessertsMenu} btnValue={btnValue} />
      </section>
      {/* salad section */}
      <section className="text-center mb-20">
        <ParallaxBg
          img={saladImg}
          title={saladTitle}
          description={description}
        />
        <MenuContainer menu={saladMenu} btnValue={btnValue} />
      </section>
      {/* pizza section */}
      <section className="text-center mb-20">
        <ParallaxBg
          img={pizzaImg}
          title={pizzaTitle}
          description={description}
        />
        <MenuContainer menu={pizzaMenu} btnValue={btnValue} />
      </section>
      {/* soup section */}
      <section className="text-center mb-20">
        <ParallaxBg img={soupImg} title={soupTitle} description={description} />
        <MenuContainer menu={soupMenu} btnValue={btnValue} />
      </section>
    </div>
  );
};

export default Menu;
