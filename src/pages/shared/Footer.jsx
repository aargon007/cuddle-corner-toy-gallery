import React from "react";
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaPinterest,
	FaTiktok,
	FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="p-5 space-y-5 text-white bg-[url(https://www.tugagency.com/wp-content/uploads/2019/09/footer_background-1024x375.jpg)] bg-opacity-100 bg-no-repeat bg-cover bg-top">
			<div className="flex flex-col md:flex-row text-center gap-8 py-5">
				<div className="w-full space-y-5">
					<div className="flex gap-3 items-center">
						<img
							src="https://img.icons8.com/3d-fluency/94/butterfly.png"
							alt=""
							className="w-14 "
						/>
						<div>
							<h1 className="text-xl font-semibold">Cuddle Corner</h1>
							<p>
								<small>Animal Toys for Kidz</small>
							</p>
						</div>
					</div>
					<p className="text-left leading-relaxed">
						Cuddle Corner is the global marketplace for unique and creative
						goods. It’s home to a universe of special, extraordinary items, from
						unique handcrafted pieces to vintage treasures.
					</p>
					<div className="flex gap-5 text-2xl">
						<FaFacebook className="" />
						<FaTwitter />
						<FaInstagram />
						<FaPinterest />
						<FaLinkedin />
						<FaTiktok />
					</div>
				</div>
				<div className="w-full flex md:justify-around md:flex-row flex-col gap-10">
					<div>
						<h1 className="text-xl mb-5 font-semibold text-left">Company</h1>
						<div className="flex flex-col text-left space-y-3">
							<Link to='/' className="defaultLink">
                                Home
                            </Link>

							<Link to="about" className="defaultLink">
                                About
                            </Link>

							<Link to="login" className="defaultLink">
                                Login
                            </Link>
						</div>
					</div>
					<div>
						<h1 className="text-xl mb-5 font-semibold text-left">Products</h1>
						<div className="flex flex-col space-y-3 text-left">
							<Link to='all-toys' className="defaultLink">
                                All Toys
                            </Link>

							<Link to='my-toys' className="defaultLink">
                                My Toys
                            </Link>

							<Link to='add-toy' className="defaultLink">
                                Add A Toy
                            </Link>
						</div>
					</div>
				</div>
				<div className="w-full space-y-3 md:text-center text-left">
					<h1 className="text-xl font-semibold ">Contact Us</h1>
					<p>5327 Jacuzzi Street, CA, USA</p>
					<p>Call us at 510.527.4411</p>
					<p>shopping@cuddlecorner.com</p>
				</div>
			</div>

			<p className="text-center pt-5 pb-3 border-t border-t-gray-800">
				Copyright © Cuddle Corner, 2023. All Rights Reserved.
			</p>
		</div>
	);
};

export default Footer;
