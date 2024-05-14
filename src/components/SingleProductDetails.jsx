import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { TfiLocationPin } from "react-icons/tfi";
import { BsCalendar2DateFill } from "react-icons/bs";

const SingleProductDetails = () => {
    const { id } = useParams();
    const {user}=useContext(AuthContext)
    console.log(id)
    const [fod, setFod] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/singleFood/${id}`)
            .then(res => res.json())
            .then(data => {
                setFod(data)
                // console.log(data)
            })

    }, [id])
    return (
        <div className="container mx-auto">
                 <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <img className="object-cover w-full h-64" src={fod.photo} alt="Article" />

                    <div className="p-6">
                        <div>
                            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{fod.name}</span>
                            <div href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 " tabIndex="0" >I Built A Successful Blog In One Year</div>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{fod.foodStatus}</p>
                            <div className="flex justify-between">
                            <h2>Quantity:  {fod.quantity}</h2>
                            <h2 className="flex"><TfiLocationPin /> {fod.location}</h2>
                        </div>
                        <div className="flex">
                            <h2 className="flex"><BsCalendar2DateFill /> {fod.date}</h2>
                            <h2>Note: {fod.notes}</h2>
                        </div>
                        </div>

                        <div className="mt-4">
                        <h1 className="text-2xl">Donar Information</h1>
                            <div className="flex items-center">

                                <div className="flex items-center">
                                    <img className="object-cover h-10 rounded-full" src={user?.photoURL} alt="" />
                                    <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">{user?.displayName}</a>
                                </div>
                                <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
                            </div>
                        </div>
                    </div>


                </div>
        </div>
    );
};

export default SingleProductDetails;