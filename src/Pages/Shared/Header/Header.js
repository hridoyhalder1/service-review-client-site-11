import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';


const Header = () => {
    const { logOut, user } = useContext(AuthContext);

    // log out auth setup
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const menuItems = <>
        <li><Link to='/' className=' cursor-pointer font-semibold' >Home</Link></li>
        <li><Link to='/blog' className=' cursor-pointer font-semibold' >Blog</Link></li>
        {
            user?.uid ?
                <>

                    <button className=' cursor-pointer font-semibold' onClick={handleLogOut}>Log out</button>
                    <li><Link to='/myreviews' className=' cursor-pointer font-semibold' >My Reviews</Link></li>
                    <li><Link to='/addservice' className=' cursor-pointer font-semibold' >Add Service</Link></li>
                </>
                :
                <>
                    <li><Link to='/login' className=' cursor-pointer font-semibold' >Login</Link></li>
                    <li><Link to='/signup' className=' cursor-pointer font-semibold' >SignUp</Link></li>
                </>
        }


    </>

    return (
        <div>
            <div className="navbar bg-base-100 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 cursor-pointer rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Coading Academy</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                
                <div className="navbar-end p-0">

                    {user?.photoURL ?
                        <img
                            src={user?.photoURL}
                            alt=""
                            className=' rounded-full w-10 cursor-pointer'
                            title={user?.displayName}

                        />
                        : <FaUser></FaUser>
                    }

                </div>

            </div>
        </div>
    );
};

export default Header;