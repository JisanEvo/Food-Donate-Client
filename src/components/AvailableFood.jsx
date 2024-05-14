import { useLoaderData } from "react-router-dom";
import AvailableCard from "./AvailableCard";


const AvailableFood = () => {
const food=useLoaderData()
console.log(food)
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 m-4">
           {
            food.map(fd=><AvailableCard key={fd._id} fd={fd}></AvailableCard>)
           }
        </div>
    );
};

export default AvailableFood;