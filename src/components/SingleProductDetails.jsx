
import { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { AuthContext } from "../provider/AuthProvider";

const SingleProductDetails = () => {
    const { id } = useParams();
    const [fod, setFod] = useState({});
    const [isOpen, setIsOpen] = useState(false); // State for modal visibility
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`https://food-donate-server-mvl63ozb7-develops-hunt.vercel.app/singleFood/${id}`)
            .then(res => res.json())
            .then(data => {
                setFod(data);
            });
    }, [id]);

    const handleRequest = () => {
        setIsOpen(true); // Open modal when "Request" button is clicked
    };

    const submitRequest = (e) => {
        e.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const quantity = form.quantity.value;
        const location = form.location.value;
        const date = form.date.value;
        const notes = form.notes.value;
        const email = user.email;
        const donar = form.donateP.value
        const dname = form.donarName.value
        const status = form.status.value

        const newDonate = { photo, name, location, quantity, date, notes, email, donar, dname, status }

        console.log(newDonate)
        console.log(e.target.value)
    }

    return (
        <div className="lg:ml-[500px] mt-4">
            <div className="container mx-auto">
                <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <img className="object-cover w-full h-64" src={fod.photo} alt="Article" />

                    <div className="p-6">
                        <div>
                            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400"></span>
                            <div href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 " tabIndex="0">Name : {fod.name}</div>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{fod.foodStatus}</p>
                            <div className="flex ">
                                <p className="mt-2 text-[14px] font-bold  text-gray-600 dark:text-gray-400">Quantity : {fod.quantity} Pich</p>
                                <div className="badge badge-error text-white p-3 ml-4 items-center mt-2">{fod.status}</div>
                            </div>

                            <div className="flex font-bold">
                                <p className="flex items-center text-[14px] mt-2"><GrLocation className="mr-2 text-[#1BA261]"></GrLocation>  {fod.location}</p>
                                <h2 className="ml-4 mt-2 ">Expired :  {fod.date}</h2>
                            </div>
                            <div>
                                <p><span className="font-bold">Description :</span> {fod.notes}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 w-full ">
                        <h1 className="text-2xl text-center">Donor Information:</h1>
                        <div className="flex items-center justify-center w-full">
                            <div className=" items-center ">
                                <div className="text-center">
                                    <img className="object-cover" src={fod.donar} alt="" />
                                </div>
                                <div className="mt-2">
                                    <p className=" font-semibold text-gray-700 dark:text-gray-200" >Donor Name: {fod.dname}</p>
                                    <p className=" font-semibold text-gray-700 dark:text-gray-200" >Email: {fod.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <NavLink to={`/requestPage/${fod._id}`}>
                            <button onClick={handleRequest} className="btn btn-accent">Request</button>
                        </NavLink>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SingleProductDetails;
