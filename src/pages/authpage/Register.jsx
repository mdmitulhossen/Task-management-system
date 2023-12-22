import { useForm } from 'react-hook-form';
import loginBg from '../../assets/home5.jpg';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'
import toast from 'react-hot-toast';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const { signUpWithEmailPassword, updateUserProfile, loading, setLoading,
    } = useAuth() || {};
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    // / handle add
    const handleRegister = (data) => {
        const { name, email, password, photoURL } = data || {}
        // console.log(data)

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters")
            return
        }
        //create user
        signUpWithEmailPassword(email, password)
            .then((result) => {
                updateUserProfile({ displayName: name, photoURL: photoURL })
                    .then((r) => {
                                setLoading(false);
                                navigate(location?.state ? location.state : "/");
                                toast.success("Registration successful");
                            

                    })
                    .catch((err) => {
                        setLoading(false);
                        toast.error(err.message);
                    });
            })
            .catch((err) => {
                toast.error(err.message);
                setLoading(false);
            });
    }


    return (
        <div
            style={{
                backgroundImage: `url(${loginBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",

            }}
            className="antialiased bg-slate-200 min-h-screen flex justify-center items-center">
            <div className="max-w-lg w-full mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
                <h1 className="text-4xl font-medium">Register</h1>
                <p className="text-slate-500">Hi, Welcome back 👋</p>


                <form action="" className="my-10" onSubmit={handleSubmit(handleRegister)}>
                    <div className="flex flex-col space-y-5">
                        <label htmlFor="name">
                            <p className="font-medium text-slate-700 pb-2">Name</p>
                            <input {...register("name")} id="name" name="name" type="text" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter Full Name" />
                        </label>
                        <label htmlFor="photoURL">
                            <p className="font-medium text-slate-700 pb-2">PhotoURL</p>
                            <input {...register("photoURL")} id="photoURL" name="photoURL" type="text" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="PhotoURL" />
                        </label>
                        <label htmlFor="email">
                            <p className="font-medium text-slate-700 pb-2">Email address</p>
                            <input {...register("email")} id="email" name="email" type="email" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address" />
                        </label>
                        <label htmlFor="password">
                            <p className="font-medium text-slate-700 pb-2">Password</p>
                            <input {...register("password")} id="password" name="password" type="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password" />
                        </label>

                        <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                            <span>Register</span>
                        </button>
                        <p className="text-center">Already Create account? <a onClick={() => navigate('/login')} className="text-indigo-600 font-medium inline-flex space-x-1 items-center cursor-pointer"><span>login now </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg></span></a></p>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Register;