const ItemCard = ({ item }) => {
  const { name, recipe, price, image } = item;
  return (
    <div className="flex gap-4">
      <div>
        <img
          src={image}
          alt=""
          style={{ borderRadius: "0 150px 150px 150px" }}
        />
      </div>
      <div>
        <h3 className="uppercase md:text-xl">{name} -------</h3>
        <p>{recipe}</p>
      </div>
      <h3 className="text-xl text-amber-500">${price}</h3>
    </div>
  );
};

export default ItemCard;
