import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../provider/AuthProvider"

const Navbar = () => {
    const Links = <>

        <li><NavLink to="/">Home</NavLink></li>


        <li><NavLink to="/availableFood">Available Food</NavLink></li>
        {/* <li><NavLink to="/register">Register</NavLink></li> */}
        <li><NavLink to="/addFood">Add Food</NavLink></li>

        <li><NavLink to="/manageFood">Manage My Food</NavLink></li>
        {/* <li><NavLink to='/updateProduct/:id'>Update</NavLink></li> */}
        <li><NavLink to='/req'>My Food Request</NavLink></li>


    </>
    const {user,logOut}=useContext(AuthContext)
    return (

        <div>
            <div className="navbar bg-base-100 shadow-lg fixes z-40 px-4 ">
                <div className="navbar-start">
                    <div className="dropdown z-50">
                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden " >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                Links
                            }
                        </ul>
                    </div>
                    <Link  to="/" className="flex items-center">
                        <p className="lg:text-2xl">Hungry<span className="text-red-500">'s</span></p>
                        <img className="w-[50px]  lg:w-[80px]" src="https://i.postimg.cc/bvJMtY7Y/tiny-people-standing-near-box-donation-food-delivery-volunteers-giving-healthy-grocery-goods-charity.avif" alt="" />

                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        {
                            Links
                        }
                    </ul>
                </div>
                <div className="navbar-end">



                    {
                        user ? <div title={user?.displayName}  className="dropdown dropdown-end z-40"  >
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL||"https://i.postimg.cc/QNkbjGzf/images.png" } alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user?.displayName || "Jisan"}</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost"
                                        onClick={() => logOut()}
                                    >Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm  btn-ghost">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar