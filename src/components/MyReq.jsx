// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../provider/AuthProvider";


// const MyReq = () => {
//     const { user } = useContext(AuthContext);
//     const [items, setItems] = useState([]);

//     useEffect(() => {
//         if (user) {
//             fetch(`https://food-donate-server-two.vercel.app/req/${user?.email}`)
//                 .then(res => res.json())
//                 .then(data => {
//                     setItems(data);
//                 })
//                 .catch(error => {
//                     console.error("Error fetching data:", error);
//                 });
//         }
//     }, [user]);
//     console.log(items)
//     return (
//         <div>
//                  <h1 className="text-2xl">Hello Jisannn</h1>
//         </div>
//     );
// };

// export default MyReq;

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyReq = () => {
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (user) {
            fetch(`https://food-donate-server-two.vercel.app/req/${user?.email}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Failed to fetch data');
                    }
                    return res.json();
                })
                .then(data => {
                    setItems(data);
                    setLoading(false);
                })
                .catch(error => {
                    setError(error.message);
                    setLoading(false);
                });
        }
    }, [user]);

    //  console.log(items)

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <div className="flex flex-col mt-6">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-800">
                                    <tr>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            Food Info
                                        </th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400  hidden  sm:block">
                                            Donator
                                        </th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            <div className=" hidden  sm:block">
                                                Email address
                                            </div>
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                    {items.map(item => (
                                        <tr key={item._id}>
                                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">

                                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                    <div className="inline-flex items-center gap-x-3">


                                                        <div className="flex items-center gap-x-2">
                                                            <img className="object-cover w-40 h-40 rounded-3xl	 " src=
                                                                {item.photo} alt="" />
                                                            <div className=" hidden  sm:block">
                                                                <h2 className="text-base  text-gray-800 dark:text-white ">{item.name}</h2>
                                                                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">Quantity: {item.quantity}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>

                                                {/* Render food info */}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">

                                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                    <div className="flex items-center gap-x-2">
                                                        <p className="font-medium text-lg  hidden  sm:block">{user.displayName}</p>

                                                    </div>
                                                </td>
                                                {/* Render donator */}
                                            </td>
                                            <td className=" px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                <div className=" hidden  sm:block">
                                                    {item.notes.substring(0, 20)}
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                {/* Render edit options */}
                                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                    <div className="flex items-center gap-x-6">



                                                    </div>
                                                </td>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReq;
