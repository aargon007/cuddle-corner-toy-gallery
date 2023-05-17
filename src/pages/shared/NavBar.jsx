import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
	const menuList = [
		{ name: "Home", to: "/", current: true },
		{ name: "Blog", to: "/blog", current: false },
		{ name: "All Toys", to: "/all-toys", current: false },
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

							<div className="flex items-center justify-center sm:items-stretch sm:justify-start">
								<div className="hidden sm:ml-6 sm:block">
									<div className="flex space-x-4">
										{menuList.map((item) => (
											<NavLink
												key={item.name}
												to={item.to}
												className={({ isActive }) =>
													isActive
														? "bg-blue-500 text-white block rounded-md px-3 py-2 text-base font-medium"
														: "block rounded-md px-3 py-2 text-base font-medium hover:bg-blue-300"
												}
											>
												{item.name}
											</NavLink>
										))}
										<NavLink
											to="/login"
											className={({ isActive }) =>
												isActive
													? "bg-blue-500 text-white block rounded-md px-3 py-2 text-base font-medium"
													: "block rounded-md px-3 py-2 text-base font-medium hover:bg-blue-300"
											}
										>
											Login
										</NavLink>
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
										isActive
											? "bg-blue-500 text-white block rounded-md px-3 py-2 text-base font-medium"
											: "block rounded-md px-3 py-2 text-base font-medium hover:bg-blue-300"
									}
								>
									{item.name}
								</NavLink>
							))}
							<NavLink
								to="/login"
								className={({ isActive }) =>
									isActive
										? "bg-blue-500 text-white block rounded-md px-3 py-2 text-base font-medium"
										: "block rounded-md px-3 py-2 text-base font-medium hover:bg-blue-300"
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
