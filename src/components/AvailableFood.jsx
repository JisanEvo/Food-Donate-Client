


import  { useState } from 'react';
import AvailableCard from "./AvailableCard";
import { useLoaderData } from 'react-router-dom';

const AvailableFood = () => {
    const [food, setFood] = useState(useLoaderData());

    const handleSearch = event => {
        event.preventDefault();
        const form = event.target;
        const searchQuery = form.search.value.toLowerCase();
        const filteredFood = food.filter(fd => fd.name.toLowerCase().includes(searchQuery));
        setFood(filteredFood);
    };
    const handleSort = () => {
        const sortedFood = [...food].sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
        });
        setFood(sortedFood);
    };

    return (
        <div>

                <div className="lg:flex ">
                    <div className="lg:flex justify-center w-full">
                        <form action="" onSubmit={handleSearch}>
                            <input type="text" name="search" placeholder="Search Here " className="input input-bordered"   />
                            <button className="btn btn-info">Search</button>

                        </form>

                        <button onClick={handleSort} className="btn btn-outline bg-white ml-2">Sort by Date (Ascending)</button>
                    </div>
                    <div className='flex justify-center'>
                    {/* <input type="text" name="search" placeholder="Search Here " className="input input-bordered" /> */}


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
