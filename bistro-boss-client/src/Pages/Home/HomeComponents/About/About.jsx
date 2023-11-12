import bgImg from "../../../../assets/home/chef-service.jpg";

const About = () => {
  return (
    <div className="my-8 md:my-20 px-4 md:px-20 lg:px-72 ">
      <div
        className="hero bg-fixed "
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="hero-content text-center text-black bg-white w-4/5 mx-auto my-8 md:my-12 lg:my-24">
          <div className="py-10 max-w-md ">
            <h1 className="mb-5 text-4xl  uppercase">Bistro Boss</h1>
            <p>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
