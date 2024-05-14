import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider"
// import { TfiLocationPin } from "react-icons/tfi";
// import { BsCalendar2DateFill } from "react-icons/bs";



const CardShow = ({ item }) => {

    const { user } = useContext(AuthContext)

    return (
        <div>
            <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <img className="object-cover w-full h-64" src={item.photo} alt="Article" />

                <div className="p-6">
                    <div>
                        <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{item.name}</span>
                        <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">I Built A Successful Blog In One Year</a>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.foodStatus}</p>
                    </div>

                    <div className="mt-4">
                        {/* <div className="flex justify-between">
                            <h2>Quantity:  {item.quantity}</h2>
                            <h2 className="flex"><TfiLocationPin /> {item.location}</h2>
                        </div>
                        <div className="flex justify-between">
                            <h2 className="flex"><BsCalendar2DateFill /> {item.date}</h2>
                            <h2>Note: {item.notes}</h2>
                        </div> */}
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <img className="object-cover h-10 rounded-full" src={item.donar} alt="" />
                                <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">{item.dname}</a>
                            </div>
                            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardShow;