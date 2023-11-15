import { useState } from "react";
import bannerImg from "../../assets/shop/banner2.jpg";
import ParallaxBg from "../Shared/ParallaxBG/ParallaxBg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";
import FoodTabPanel from "./FoodTabPanel";
import { useParams } from "react-router-dom";

const OurShop = () => {
  const [menu] = useMenu();
  const { category } = useParams();
  console.log(category);

  const categories = ["salad", "soup", "pizza", "dessert", "drinks"];
  const selectedIndex = categories.indexOf(category);
  console.log(selectedIndex);

  const [tabIndex, setTabIndex] = useState(selectedIndex);

  const dessertsMenu = menu.filter((dessert) => dessert.category === "dessert");
  const saladMenu = menu.filter((salad) => salad.category === "salad");
  const pizzaMenu = menu.filter((pizza) => pizza.category === "pizza");
  const soupMenu = menu.filter((soup) => soup.category === "soup");
  const drinksMenu = menu.filter((drinks) => drinks.category === "drinks");

  // console.log(saladMenu);

  return (
    <div>
      <ParallaxBg
        img={bannerImg}
        title={"our shop"}
        description={"Would you like to try a dish?"}
      ></ParallaxBg>
      <div className="my-8 md:my-12 px-4 md:px-20 lg:px-72 ">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="uppercase font-bold">
            <Tab>Salads</Tab>
            <Tab>Soups</Tab>
            <Tab>Pizza</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <FoodTabPanel items={saladMenu} />
          </TabPanel>
          <TabPanel>
            <FoodTabPanel items={soupMenu} />
          </TabPanel>
          <TabPanel>
            <FoodTabPanel items={pizzaMenu} />
          </TabPanel>
          <TabPanel>
            <FoodTabPanel items={dessertsMenu} />
          </TabPanel>
          <TabPanel>
            <FoodTabPanel items={drinksMenu} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
