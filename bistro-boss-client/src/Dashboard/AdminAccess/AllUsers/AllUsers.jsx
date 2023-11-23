import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Pages/Components/SectionTitle/SectionTitle";
import { FaTrash, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const result = await axiosSecure.get("/users", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });

      return result.data;
    },
  });

  const handleDeleteUser = (id) => {
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
        axiosSecure.delete(`/users/${id}`).then((res) => {
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

  const handleMakeAdmin = (id) => {
    axiosSecure.patch(`/users/${id}`).then((res) => {
      console.log(res);
      if (res.data.modifiedCount) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Admin Created",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };

  return (
    <section className="pb-12">
      <SectionTitle heading={"How many??"} title={"Manage All Users"} />
      <h2 className="uppercase md:text-2xl font-medium r mb-12 ">
        Total Users : {users.length}
      </h2>

      <div>
        <div className="overflow-x-auto rounded-t-lg">
          <table className="table ">
            {/* head */}
            <thead className="bg-orange-400 ">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>
                    <p>{index + 1}</p>
                  </th>
                  <td>
                    <h2 className="font-medium">{user.name}</h2>
                  </td>
                  <td>
                    <h2 className="font-medium">{user.email}</h2>
                  </td>
                  <td>
                    {user?.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user._id)}
                        className="btn  text-white bg-orange-300 md:text-2xl"
                      >
                        <FaUser />
                      </button>
                    )}
                  </td>
                  <th>
                    <button
                      onClick={() => handleDeleteUser(user._id)}
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

export default AllUsers;
