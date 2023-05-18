import React from "react";
import register from "../../assets/register.jpg";
import { Link } from "react-router-dom";

const Register = () => {
	return (
		<div className="px-5 md:px-28 py-10 flex bg-pink-50 flex-col md:flex-row ">
            <div className="w-full rounded-lg">
				<img
					src={register}
					alt="login"
					className="w-full"
				/>
			</div>
			<div className="bg-white p-5 md:p-10 w-full">
				<h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
					Create an account
				</h2>

				<form className="space-y-6" method="POST">
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
								className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
							/>
						</div>
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
					</div>

					<div>
						<label
							htmlFor="confirm"
							className="block font-medium text-gray-700"
						>
							Confirm Password
						</label>
						<div className="mt-1">
							<input
								name="confirm"
								type="password"
                                id="confirm"
								autoComplete="confirm"
								required
								className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
							/>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="flex w-full justify-center rounded-md border border-transparent bg-blue-700 py-2 px-4 font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
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
