import React, { useContext } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const NavBar = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
			.then((result) => {
				setUser(null);
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	const menuList = [
		{ name: "Home", to: "/", current: true },
		{ name: "Blog", to: "/blog", current: false },
		{ name: "All Toys", to: "/all-toys", current: false },
	];

	return (
		<Disclosure
			as="nav"
			className="py-2 font-inter bg-[url(https://terrabybattat.com/wp-content/uploads/header-bg-logo.png)] bg-no-repeat bg-[#eee9d7] bg-overlay bg-bottom"
		>
			{({ open }) => (
				<>
					<div className="px-5 md:px-28">
						<div className="relative flex h-16 items-center justify-between">
							<div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 hover:text-white outline-none">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<HiX className="block h-6 w-6" aria-hidden="true" />
									) : (
										<HiMenu className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex gap-3">
								<img
									src="https://img.icons8.com/3d-fluency/94/butterfly.png"
									alt=""
									className="w-10 "
								/>
								<div>
									<h1 className="text-2xl font-semibold font-lobster">Cuddle Corner</h1>
									<p>
										<small className="text-pink-700">Animal Toys for Kidz</small>
									</p>
								</div>
							</div>
							{/* menu list  */}
							<div className="flex items-center justify-center sm:items-stretch sm:justify-start">
								<div className="hidden sm:ml-6 sm:block">
									<div className="flex space-x-4">
										{/* menu for all user  */}
										{menuList.map((item) => (
											<NavLink
												key={item.name}
												to={item.to}
												className={({ isActive }) =>
													isActive ? "activeLink" : "defaultLink"
												}
											>
												{item.name}
											</NavLink>
										))}

										{/* user specifc menu  */}
										{user ? (
											<>
												<NavLink
													to="/my-toys"
													className={({ isActive }) =>
														isActive ? "activeLink" : "defaultLink"
													}
												>
													My Toys
												</NavLink>
												<NavLink
													to="/add-toy"
													className={({ isActive }) =>
														isActive ? "activeLink" : "defaultLink"
													}
												>
													Add a Toy
												</NavLink>
												<div
													className="flex justify-center items-center gap-2 bg-blue-50 py-1 px-2 rounded-lg"
													title={user?.displayName}
												>
													{user?.photoURL ? (
														<img
															src={user?.photoURL}
															className="w-8 h-8 rounded-full"
															title={user?.displayName}
														/>
													) : (
														<img
															src="https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png"
															className="w-8 h-8 rounded-full"
															title={user?.displayName}
														/>
													)}
													{user?.displayName ? (
														<p className="">{user?.displayName}</p>
													) : (
														<p>user</p>
													)}
												</div>
												{user && (
													<button
														onClick={handleLogOut}
														className="py-1 px-3 rounded-lg border hover:bg-blue-500 hover:text-white border-black transition-all"
													>
														Log out
													</button>
												)}
											</>
										) : (
											<NavLink
												to="/login"
												className={({ isActive }) =>
													isActive ? "activeLink" : "defaultLink"
												}
											>
												Login
											</NavLink>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						{({ close }) => (
							<div className="space-y-2 px-2 pb-5 pt-2">
								{menuList.map((item) => (
									<NavLink
										key={item.name}
										to={item.to}
										onClick={close}
										className={({ isActive }) =>
											isActive ? "activeLink" : "defaultLink"
										}
									>
										{item.name}
									</NavLink>
								))}
								{/* user specifc menu  */}
								{user ? (
									<>
										<NavLink
											to="/my-toys"
											onClick={close}
											className={({ isActive }) =>
												isActive ? "activeLink" : "defaultLink"
											}
										>
											My Toys
										</NavLink>
										<NavLink
											to="/add-toy"
											onClick={close}
											className={({ isActive }) =>
												isActive ? "activeLink" : "defaultLink"
											}
										>
											Add a Toy
										</NavLink>
										<div
											className="flex items-center gap-2 bg-blue-50 py-1 px-2 rounded-lg w-1/2"
											title={user?.displayName}
										>
											{user?.photoURL ? (
												<img
													src={user?.photoURL}
													className="w-8 h-8 rounded-full"
													title={user?.displayName}
												/>
											) : (
												<img
													src="https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png"
													className="w-8 h-8 rounded-full"
													title={user?.displayName}
												/>
											)}
											{user?.displayName ? (
												<p className="">{user?.displayName}</p>
											) : (
												<p>user</p>
											)}
										</div>
										{user && (
											<button
												onClick={handleLogOut}
												className="py-1 px-3 rounded-lg border hover:bg-blue-500 hover:text-white border-black transition-all"
											>
												Log out
											</button>
										)}
									</>
								) : (
									<NavLink
										to="/login"
										className={({ isActive }) =>
											isActive ? "activeLink" : "defaultLink"
										}
									>
										Login
									</NavLink>
								)}
							</div>
						)}
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

export default NavBar;
