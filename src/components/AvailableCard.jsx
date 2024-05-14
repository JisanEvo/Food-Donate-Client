// import { useContext } from "react";
// import { AuthContext } from "../provider/AuthProvider";
import { TfiLocationPin } from "react-icons/tfi";
import { BsCalendar2DateFill } from "react-icons/bs";
import { Link } from "react-router-dom";


const AvailableCard = ({ fd }) => {
    // const {user}=useContext(AuthContext)
    // console.log(fd)
    return (
        <div className="mx-auto container ">
            <div className="">
                <div className="max-w-2xl    overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 ">
                    <img className="object-cover w-full h-64" src={fd.photo} alt="Article" />

                    <div className="p-6">
                        <div>
                            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{fd.name}</span>
                            <div href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 " tabIndex="0" >I Built A Successful Blog In One Year</div>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{fd.foodStatus}</p>
                            <div className="flex justify-between">
                            <h2>Quantity:  {fd.quantity}</h2>
                            <h2 className="flex"><TfiLocationPin /> {fd.location}</h2>
                        </div>
                        <div className="">
                            <h2 className="flex"><BsCalendar2DateFill /> {fd.date}</h2>
                            <h2>Note: {fd.notes}</h2>
                        </div>
                        </div>

                        <div className="mt-4">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <img className="object-cover h-10 rounded-full" src={fd.donar} alt="" />
                                <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">{fd.dname}</a>
                            </div>

                        </div>
                        </div>
                    </div>
                    <div className="text-center m-4">
                    <Link to={`/singleFood/${fd._id}`}  >
                    <button className="btn  btn-info text-white">Details</button>
                    </Link>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default AvailableCard;