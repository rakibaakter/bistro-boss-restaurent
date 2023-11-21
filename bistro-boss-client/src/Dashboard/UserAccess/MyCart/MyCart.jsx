import { FaTrash } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import SectionTitle from "../../../Pages/Components/SectionTitle/SectionTitle";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart
    .reduce((accumulator, item) => accumulator + item.price, 0)
    .toFixed(2);

  return (
    <section className="pb-12">
      <SectionTitle heading={"My Cart"} title={"wanna add more?"} />
      <div className="uppercase text-2xl font-medium flex justify-evenly mb-12 ">
        <h2>Total Orders : {cart.length}</h2>
        <h2>Total Price : {totalPrice}</h2>
      </div>
      <div>
        <div className="overflow-x-auto rounded-t-lg">
          <table className="table ">
            {/* head */}
            <thead className="bg-orange-400 ">
              <tr>
                <th></th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._is}>
                  <th>
                    <p>{index + 1}</p>
                  </th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </td>
                  <td>
                    <h2 className="font-medium">{item.name}</h2>
                  </td>
                  <td>${item.price}</td>
                  <th>
                    <button className="btn btn-ghost text-red-600">
                      <FaTrash />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyCart;
