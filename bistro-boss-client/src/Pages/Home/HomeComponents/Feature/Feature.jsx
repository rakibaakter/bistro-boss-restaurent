import featureImg from "../../../../assets/home/featured.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Feature = () => {
  return (
    <div
      className="hero min-h-[70vh] bg-fixed "
      style={{
        backgroundImage: `url(${featureImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 "></div>
      <section className=" text-white">
        <SectionTitle
          heading={"Check it out"}
          title={"From our menu"}
        ></SectionTitle>
        <div className="hero-content p-0 lg:pb-20 flex-col md:flex-row my-8  px-4 md:px-8 lg:px-36 ">
          <img
            src={featureImg}
            className="max-w-[280px] rounded-lg shadow-2xl"
          />
          <div className="lg:ml-10">
            <h1 className="text-xl lg:text-2xl ">March 20, 2023</h1>
            <h1 className="text-xl lg:text-2xl uppercase">
              WHERE CAN I GET SOME?
            </h1>
            <p className="py-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              totam inventore sit? Vero consequatur dignissimos fugiat esse
              earum asperiores, laudantium illo quasi unde quo ab quia iste eos
              reprehenderit nesciunt impedit doloribus accusamus
            </p>
            <button className="btn btn-outline text-white border-white uppercase  border-t-0 border-x-0 border-b-2">
              read more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
