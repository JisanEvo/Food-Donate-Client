import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const UpdateFood = () => {
    const update = useLoaderData();
    const { user } = useContext(AuthContext);
    console.log(update);
    const handleUpdate = event => {
        // const {user}=UseAuth()

        event.preventDefault();
        // console.log(`form submit are added `)

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

        const updateDonate = { photo, name, location, quantity, date, notes, email, donar, dname }

        fetch(`https://food-donate-server-two.vercel.app/updateFood/${update._id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updateDonate)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Great",
                        text: "Updated  Succesfully",

                    });
                }
                else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",

                    });
                }
            })

        console.log(updateDonate)

    }
    return (
        <div>
            <div className="p-4	">
                <form onSubmit={handleUpdate}>

                    <div className="flex mb-8">
                        <div className="ml-4 w-1/2 ">
                            <h4>Food  Name: </h4>
                            <input type="text" name="name" placeholder="Food Name " className="input input-bordered w-full" defaultValue={update.name} />
                        </div>
                        <div className=" ml-4  w-1/2">

                            <h4>Food Photo:</h4>
                            <input type="text" name="photo" placeholder="Food Photo " className="input input-bordered w-full" defaultValue={update.photo} />
                        </div>

                    </div>

                    <div className="flex mb-8">
                        <div className="  ml-4  w-1/2">
                            <h4>Quantity </h4>
                            <input type="number" name="quantity" placeholder="Food  Quantity" className="input input-bordered w-full" defaultValue={update.quantity} />
                        </div>
                        <div className=" ml-4 w-1/2">
                            <h4>Pickup Location: </h4>
                            <input type="text" name="location" placeholder="Pickup  Location" className="input input-bordered w-full" defaultValue={update.location} />
                        </div>
                    </div>
                    <div className="flex mb-8">
                        <div className="  ml-4  w-1/2">
                            <h4>Expire Date </h4>
                            <input type="date" name="date" placeholder="Expire Date" className="input input-bordered w-full" defaultValue={update.date} />
                        </div>
                        <div className=" ml-4 w-1/2">
                            <h4>Additional Notes:</h4>
                            <input type="text" name="notes" placeholder="Additional Notes" className="input input-bordered w-full" defaultValue={update.notes} />
                        </div>
                    </div>
                    <div className="flex mb-8">
                        <div className="  ml-4  w-1/2">
                            <h4>Donator Profile</h4>
                            <input type="text" name="donateP" placeholder="Donator Profile " defaultValue={user?.photoURL} className="input input-bordered w-full" />
                        </div>
                        <div className=" ml-4 w-1/2">
                            <h4> User Name:</h4>
                            <input type="text" name="donarName" placeholder="User Name" defaultValue={user?.displayName} className="input input-bordered w-full" />
                        </div>
                    </div>

                    <div className="flex mb-8">
                        <div className="  ml-4  w-1/2">
                            <h4>User Email:</h4>
                            <input type="text" name="email" placeholder="User Email" className="input input-bordered w-full" defaultValue={user?.email} />
                        </div>
                        <div className="  ml-4  w-1/2">
                            <h4>Food Status:</h4>
                            <input type="text" name="status" placeholder="Available " className="input input-bordered w-full" defaultValue={"Available"} />
                        </div>
                    </div>


                    <input className="btn btn-block bg-green-500 " type="submit" value="Update Donate" />
                </form>

            </div>
        </div>
    );
};

export default UpdateFood;