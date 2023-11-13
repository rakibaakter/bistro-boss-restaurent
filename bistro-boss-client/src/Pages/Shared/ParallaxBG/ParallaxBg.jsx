const ParallaxBg = ({ img, title, description }) => {
  return (
    <div
      className="hero bg-fixed  h-[80vh]"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay "></div>
      <div className=" hero-content text-center text-neutral-content bg-black bg-blend-overlay bg-opacity-60 py-4 md:py-12 lg:py-20 w-11/12  lg:w-3/4 ">
        <div className="max-w-md ">
          <h1 className="mb-5 uppercase text-4xl font-semibold">{title}</h1>
          <p className="mb-5">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ParallaxBg;
