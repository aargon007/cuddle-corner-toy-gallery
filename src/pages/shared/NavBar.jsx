import React, { useContext } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const NavBar = () => {
	const { user } = useContext(AuthContext);

	const menuList = [
		{ name: "Home", to: "/", current: true },
		{ name: "Blog", to: "/blog", current: false },
		{ name: "All Toys", to: "/all-toys", current: false },
	];

	const userSpecificMenu = [
		{ name: "My Toys", to: "/my-toys", current: false },
		{ name: "Add a Toy", to: "/add-toy", current: false },
	];

	return (
		<Disclosure as="nav" className="py-2 bg-pink-50">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
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
									<h1 className="text-2xl font-semibold">Cuddle Corner</h1>
									<p>
										<small>Animal Toys for Kidz</small>
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
												<NavLink
													to="/user"
													className={({ isActive }) =>
														isActive ? "activeLink" : "defaultLink"
													}
												>
													user
												</NavLink>
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
						<div className="space-y-2 px-2 pb-5 pt-2">
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
							<NavLink
								to="/login"
								className={({ isActive }) =>
									isActive ? "activeLink" : "defaultLink"
								}
							>
								Login
							</NavLink>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

export default NavBar;
