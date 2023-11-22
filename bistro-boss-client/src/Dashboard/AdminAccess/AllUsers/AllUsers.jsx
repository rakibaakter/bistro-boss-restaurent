import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Pages/Components/SectionTitle/SectionTitle";
import { FaTrash } from "react-icons/fa";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const result = await axiosSecure.get("/users");

      return result.data;
    },
  });

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
                  <td></td>
                  <th>
                    <button className="btn btn-ghost text-red-600 md:text-2xl">
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
