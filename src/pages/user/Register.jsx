import React, { useContext, useState } from "react";
import register from "../../assets/register.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {

    const [emailError, setEmailError] = useState(null);
    const [passError, setPassError] = useState(null);
    const [successUser, setSuccessUser] = useState(null);

    const {regWithEmailPass,user,setUser, logOut} = useContext(AuthContext);

    const handleCreateAccount = event => {
        event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
        const url = form.photo.value;
		const password = form.password.value;
        // console.log(email, password);
        setEmailError(null);
        setPassError(null);
        setSuccessUser(null);

        if (password.length < 6) {
            setPassError('Password must be 6 characters or longer')
            return
        }
        regWithEmailPass(email, password)
        .then((result) => {
			const createdUser = result.user;
            form.reset();
            updateProfile(createdUser,{
                displayName: name, photoURL : url
            });
            setSuccessUser("Account Created Sucessfully! You can login now.")
            setUser(null)
		})
		.catch((error) => {
			console.log(error.message);
            if(error.code == "auth/invalid-email"){
                setEmailError("Invalid email. Please provide a valid email")
            }
            if(error.code == "auth/email-already-in-use"){
                setSuccessUser("You have Already Registerd!")
            }
		});

        logOut()
        .then(result => {
            setUser(null)
        })
        .catch(error => {
            console.log(error.message)
        })
    }



	return (
		<div className="px-5 md:px-28 py-10 flex bg-pink-50 flex-col md:flex-row ">
            <div className="w-full rounded-lg h-auto">
				<img
					src={register}
					alt="login"
					className="w-full h-full"
				/>
			</div>
			<div className="bg-white p-5 md:p-10 w-full">
				<h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
					Create an account
				</h2>
                <div className={`text-center p-3 bg-green-50 text-green-600 my-3 rounded-md ${successUser ? "block" : "hidden"}`}>
                    {
                        successUser ? <p>{successUser}</p> : <></>
                    }
               </div>
				<form className="space-y-6" onSubmit={handleCreateAccount}>
					<div>
						<label
							htmlFor="name"
							className="block font-medium text-gray-700"
						>
							Name
						</label>
						<div className="mt-1">
							<input
								name="name"
								type="text"
                                id="name"
                                autoComplete="name"
                                placeholder="Enter Your Name"
								className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
							/>
						</div>
					</div>

					<div>
						<label
							htmlFor="email"
							className="block font-medium text-gray-700"
						>
							Email
						</label>
						<div className="mt-1">
							<input
								name="email"
								type="email"
                                id="email"
                                placeholder="Enter Your Email Address"
								autoComplete="email"
								required
								className={`px-2 py-3 mt-1 block w-full rounded-md border ${emailError ? "border-red-400" : "border-gray-300"} shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm`}
							/>
						</div>
                        <p className="text-sm mt-1 text-red-500">{emailError}</p>
					</div>

					<div>
						<label
							htmlFor="password"
							className="block font-medium text-gray-700"
						>
							Password
						</label>
						<div className="mt-1">
							<input
								name="password"
								type="password"
								autoComplete="password"
                                id="password"
								required
								className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
							/>
						</div>
                        <p className="text-sm mt-1 text-red-500">{passError}</p>
					</div>

					<div>
						<label
							htmlFor="photo"
							className="block font-medium text-gray-700"
						>
							Photo Url
						</label>
						<div className="mt-1">
							<input
								name="photo"
								type="url"
                                id="photo"
								autoComplete="url"
								className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
							/>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="flex w-full justify-center rounded-md border border-transparent bg-blue-700 hover:bg-blue-900 py-2 px-4 font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
						>
							Register 
						</button>
					</div>
				</form>
                <p className="mt-8 text-center">
						Already Registered ?
						<Link
							to="/login"
							className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ms-3"
						>
							Login Now
						</Link>
					</p>
			</div>
		</div>
	);
};

export default Register;
