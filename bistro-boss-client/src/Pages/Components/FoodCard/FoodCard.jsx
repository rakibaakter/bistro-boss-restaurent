import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const FoodCard = ({ item }) => {
  const { user } = useAuth();
  const { name, recipe, image, price, _id } = item;
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (foodItem) => {
    console.log(foodItem);

    if (user) {
      const cartItem = {
        foodId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      axios.post("http://localhost:5000/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in.",
        text: "Login Now!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Log in!",
      }).then((result) => {
        navigate("/authentication/login", { state: { from: location } });
      });
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl text-black">
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
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline uppercase  bg-slate-200 border-0 border-amber-500 border-b-2 text-amber-500 hover:text-amber-500 hover:border-amber-500 hover:border-b-2"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
