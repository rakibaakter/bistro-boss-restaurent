import Banner from "../HomeComponents/Banner/Banner";
import CallUs from "../HomeComponents/CallUs/CallUs";
import CategorySlider from "../HomeComponents/Categories/CategorySlider";
import Feature from "../HomeComponents/Feature/Feature";
import OurMenu from "../OurMenu/OurMenu";

const Home = () => {
  return (
    <div>
      <Banner />
      <CategorySlider />
      <OurMenu />
      <CallUs />
      <Feature />
    </div>
  );
};

export default Home;
