


import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";



const CardShow = ({ item }) => {



    return (
        <div>
            <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <img className="object-cover w-full h-64" src={item.photo} alt="Article" />

                <div className="p-6">
                    <div>
                        <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{ }</span>
                        <p className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white " >Food Name : {item.name}</p>
                        <div className="flex ">
                            <p className="mt-2 text-[14px] font-bold  text-gray-600 dark:text-gray-400">Quantity : {item.quantity} Pich</p>
                            <div className="badge badge-error text-white p-3 ml-4 items-center mt-2">{item.status}</div>
                        </div>

                        <div className="flex font-bold">
                            <p className="flex items-center text-[14px] mt-2"><GrLocation className="mr-2 text-[#1BA261]"></GrLocation>  {item.location}</p>
                            <h2 className="ml-4 mt-2 ">Expired :  {item.date}</h2>
                        </div>
                    </div>

                    <div className="mt-4">

                        <div className="flex items-center">
                            <div className="flex items-center">
                                <img className="object-cover h-10 rounded-full" src={item.donar} alt="" />
                                <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">{item.dname}</a>
                            </div>

                        </div>
                        <div className="mt-4 text-center">
                            <Link to={`/singleFood/${item._id}`} >
                                <button className="btn btn-info text-white">Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardShow;