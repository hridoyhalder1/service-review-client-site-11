import React, { useContext } from 'react';
import login1 from '../../assests/icon/login1.jpg';
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-hot-toast';

const Login = () => {

    const { login, providerLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                toast.success('Login Successfully!');
                navigate('/');
            })
            .catch(error => console.error(error))
    }

    // google authentication
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result => {
            const user= result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    return (
        <div className="hero w-full min-h-screen bg-base-200">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                    <img src={login1} alt="" className=' w-full h-full' />

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center mt-3 font-bold">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Login" />
                        </div>
                    </form>
                    <p className=' ml-8'>Don't have an account? Please <Link className=' text-orange-600' to='/signup'>SignUp</Link> </p>
                    <p className=' text-center font-bold text-indigo-700'>Or Login With</p>
                    <span  className=' text-center pl-48 pt-4 text-white pb-3 cursor-pointer'> <FaGoogle onClick={handleGoogleSignIn} /> </span>
                </div>
            </div>
        </div>
    );
};

export default Login;