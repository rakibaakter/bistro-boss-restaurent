import { FaTrash } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import SectionTitle from "../../../Pages/Components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const MyCart = () => {
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const totalPrice = cart
    .reduce((accumulator, item) => accumulator + item.price, 0)
    .toFixed(2);

  const handleDeleteCartItem = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          console.log(res);
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <section className="pb-12">
      <SectionTitle heading={"My Cart"} title={"wanna add more?"} />
      <div className="uppercase md:text-2xl font-medium flex justify-evenly items-center mb-12 ">
        <h2>Total Orders : {cart.length}</h2>
        <h2>Total Price : {totalPrice}</h2>
        <button className="btn btn-sm btn-ghost bg-orange-300">Pay</button>
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
                <tr key={item._id}>
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
                    <button
                      onClick={() => handleDeleteCartItem(item._id)}
                      className="btn btn-ghost text-red-600 md:text-2xl"
                    >
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
