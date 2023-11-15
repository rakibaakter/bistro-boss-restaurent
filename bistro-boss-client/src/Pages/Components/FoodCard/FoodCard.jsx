import BlackBorderBtn from "../Buttons/BlackBorderBtn";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="card-body text-center">
        <p className="bg-black font-bold text-white px-4 py-2 absolute right-2 top-1 rounded-md">
          ${price}
        </p>
        <h2 className="card-title justify-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline uppercase  bg-slate-200 border-0 border-amber-500 border-b-2 text-amber-500 hover:text-amber-500 hover:border-amber-500 hover:border-b-2">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
