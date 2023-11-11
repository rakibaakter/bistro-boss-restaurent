const SectionTitle = ({ heading, title }) => {
  return (
    <div className="text-center my-16">
      <header className="text-amber-500 text-xl">---{heading}---</header>
      <h2 className="uppercase  my-6 py-4 border-y-4 md:w-1/2 mx-auto text-2xl md:text-4xl">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
