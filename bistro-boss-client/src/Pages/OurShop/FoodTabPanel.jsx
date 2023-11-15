import FoodCard from "../Components/FoodCard/FoodCard";

const FoodTabPanel = ({ items }) => {
  //   console.log(items);
  return (
    <div className="my-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <FoodCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default FoodTabPanel;
