// import { useLoaderData } from "react-router-dom";
// import AvailableCard from "./AvailableCard";


// const AvailableFood = () => {
//     const food = useLoaderData();
//     const handleSearch = event => {
//         event.preventDefault();
//         const form = event.target;
//      const ser=form.search.value;
//      console.log(ser)
//     }
//     // console.log(food)
//     return (
//         <div>
//             <div className="text-center w-full border border-2">
//                 <div className="">
//                     <div className="flex justify-center w-full">
//                         <form action="" onSubmit={handleSearch}>
//                             <input type="text" name="search" placeholder="Search Here " className="input input-bordered" />
//                             <button

//                                 className="btn btn-outline bg-white">Search</button>
//                                 </form>
//                     </div>
//                 </div>
//                 {/* sort */}
//                 {/* <div>
//                 <fieldset className="w-full space-y-1 flex  dark:text-gray-800 bg-black p-4 text-center">
//                     <label htmlFor="Search" className="">Sort</label>
//                   <div className="w-full text-center">
//                   <div className="relative">
//                         <span className="absolute inset-y-0 left-0 flex items-center pl-2">
//                             <button type="button" title="Sort" className="p-1 focus:outline-none focus:ring">
//                                 <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-800">
//                                     <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
//                                 </svg>
//                             </button>
//                         </span>
//                         <input type="search" name="Search" placeholder="Search..." className="w-32 py-4 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600" />
//                     </div>
//                   </div>
//                 </fieldset>
//             </div> */}
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 m-4 h-50vh ">
//                 {
//                     food.map(fd => <AvailableCard key={fd._id} fd={fd}></AvailableCard>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default AvailableFood;


import React, { useState } from 'react';
import AvailableCard from "./AvailableCard";
import { useLoaderData } from 'react-router-dom';

const AvailableFood = () => {
    const [food, setFood] = useState(useLoaderData());

    const handleSearch = event => {
        event.preventDefault();
        const form = event.target;
        const searchQuery = form.search.value.toLowerCase(); // Convert search query to lowercase for case-insensitive search
        const filteredFood = food.filter(fd => fd.name.toLowerCase().includes(searchQuery));
        setFood(filteredFood);
    };

    return (
        <div>
            <div className="text-center w-full border border-2">
                <div className="">
                    <div className="flex justify-center w-full">
                        <form action="" onSubmit={handleSearch}>
                            <input type="text" name="search" placeholder="Search Here " className="input input-bordered" />
                            <button className="btn btn-outline bg-white">Search</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 m-4 h-50vh ">
                {
                    food.map(fd => <AvailableCard key={fd._id} fd={fd}></AvailableCard>)
                }
            </div>
        </div>
    );
};

export default AvailableFood;
