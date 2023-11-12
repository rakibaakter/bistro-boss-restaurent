import Banner from "../HomeComponents/Banner/Banner";
import CallUs from "../HomeComponents/CallUs/CallUs";
import CategorySlider from "../HomeComponents/Categories/CategorySlider";
import OurMenu from "../OurMenu/OurMenu";

const Home = () => {
  return (
    <div>
      <Banner />
      <CategorySlider />
      <OurMenu />
      <CallUs />
    </div>
  );
};

export default Home;
