import React, { useContext, useState } from "react";
import { GoMail } from "react-icons/go";
import { FaLock, FaUser } from "react-icons/fa";
import login from "../../assets/login.jpg";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { BsEmojiAngry } from "react-icons/bs";

const Login = () => {
	const { loginWithEmailPass, loginWithGoogle, recoverPass, setUser } =
		useContext(AuthContext);

	const [error, setError] = useState(null);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const handleGoogleLogin = () => {
		loginWithGoogle()
			.then((result) => {
				const loggedUser = result.user;
				console.log(loggedUser);
				setUser(loggedUser);
				navigate(from, { replace: true });
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleLoginWithEmailPass = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;

		loginWithEmailPass(email, password)
			.then((result) => {
				const loggedUser = result.user;
				console.log(loggedUser);
				form.reset();
				navigate(from, { replace: true });
			})
			.catch((error) => {
				console.log(error);
				if (error.code === "auth/wrong-password") {
					setError("Wrong password! Please provide correct one or recover.");
				}
				if (error.code === "auth/user-not-found") {
					setError("Not a Valid User.");
				}
			});
	};
	return (
		<div className="px-5 md:px-28 py-10 flex gap-10 flex-col md:flex-row">
			<div className="w-full bg-pink-300/50 rounded-lg">
				<img
					src={login}
					alt="login"
					className="w-full mix-blend-overlay rounded-lg"
				/>
			</div>

			<div className="px-10 py-5 w-full border-2 rounded-lg">
				{error ? (
					<BsEmojiAngry className="text-red-500 mx-auto h-12 w-auto" />
				) : (
					<img
						className="mx-auto h-12 w-auto"
						src="https://www.svgrepo.com/show/499664/user-happy.svg"
						alt=""
					/>
				)}

				<h2 className="my-4 text-center text-3xl font-bold text-gray-900">
					Login to your account
				</h2>
               <div className="text-center p-3 bg-red-50 text-red-500 my-3 rounded-md">
                    {
                        error ? <p>{error}</p> : <></>
                    }
               </div>
				<form onSubmit={handleLoginWithEmailPass}>
					<div>
						<label
							htmlFor="email"
							className="block text-lg font-medium leading-6 mb-2"
						>
							Email address
						</label>
						<div className="flex items-center text-lg mb-5">
							<FaUser className="absolute ml-3 w-6" />
							<input
								type="email"
								id="email"
								name="email"
								autoComplete="email"
								className=" pl-12 px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500"
								placeholder="Enter Your Email"
								required
							/>
						</div>
					</div>
					<div>
						<div className="flex justify-between items-center">
							<label
								htmlFor="password"
								className="block text-lg font-medium leading-6 mb-2"
							>
								Password
							</label>
							<button className="font-semibold text-indigo-400 hover:text-indigo-600">
								Forgot password?
							</button>
						</div>
						<div className="flex items-center text-lg mb-5">
							<FaLock className="absolute ml-3 w-6" />
							<input
								type="password"
								id="password"
								name="password"
								autoComplete="password"
								className=" pl-12 px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500"
								placeholder="Enter Your Password"
								required
							/>
						</div>
					</div>
					<button className="bg-gradient-to-r from-blue-500 hover:from-blue-700 hover:to-pink-700 to-pink-500 font-medium p-2 md:p-4 rounded-lg text-white uppercase w-full">
						Login
					</button>
				</form>
				<div className="mt-5 flex justify-between items-center">
					<p className="border-t-2 w-3/12"></p>
					<p className="w-6/12 text-center text-xl">Or continue with</p>
					<p className="border-t-2 w-3/12"></p>
				</div>
				<div>
					<button
						onClick={handleGoogleLogin}
						className="text-center text-xl flex items-center gap-2 border-2 bg-blue-200 hover:bg-blue-400 rounded-lg py-3 px-5 mx-auto mt-5"
					>
						<FcGoogle className="bg-white text-2xl p-px rounded-full" />{" "}
						<span>Google</span>
					</button>
				</div>
				<p className="mt-8 text-center">
					Don't Have an Account Yet ?
					<Link
						to="/register"
						className="font-semibold leading-6 text-blue-500 hover:text-blue-700 ms-3"
					>
						Register Now
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
