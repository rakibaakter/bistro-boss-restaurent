import { Helmet } from "react-helmet-async";
import About from "../HomeComponents/About/About";
import Banner from "../HomeComponents/Banner/Banner";
import CallUs from "../HomeComponents/CallUs/CallUs";
import CategorySlider from "../HomeComponents/Categories/CategorySlider";
import Feature from "../HomeComponents/Feature/Feature";
import Testimonials from "../HomeComponents/Testimonials/Testimonials";
import OurMenu from "../OurMenu/OurMenu";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <CategorySlider />
      <About />
      <OurMenu />
      <CallUs />
      <Feature />
      <Testimonials />
    </div>
  );
};

export default Home;
