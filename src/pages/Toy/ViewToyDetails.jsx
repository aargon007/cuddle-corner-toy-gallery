import React from "react";
import { Rating } from "@smastrom/react-rating";
import { Link, useLoaderData } from "react-router-dom";
import "@smastrom/react-rating/style.css";

const ViewToyDetails = () => {
	const loadedToys = useLoaderData();
	// console.log(loadedToys);
	const {
		image,
		toyName,
		sellerName,
		sellerEmail,
		price,
		rating,
		quantity,
		description,
		sub_category,
	} = loadedToys;

	return (
		<div className="py-10 px-5 md:px-28">
			<div className="flex items-center flex-col md:flex-row">
				<div className="w-full h-full px-10">
					<img src={image} alt="" className="w-full h-[400px]"/>
				</div>
				<div className="w-full space-y-5">
					<h1 className="text-3xl font-semibold">{toyName}</h1>
                    <p> <span className="font-semibold ">Price :  </span>${price}</p>
                    <p> <span className="font-semibold ">Available Quantity : </span>{quantity}</p>
					<div className="flex ">
						<Rating
							style={{ maxWidth: 120, marginRight: 5 }}
							value={rating}
							readOnly
						/>
						{rating} / 5
					</div>
					<div className="flex items-center gap-3">
						<img
							src="https://terrabybattat.com/wp-content/uploads/retailers-logo_amazon.jpg"
							alt=""
							className="h-5"
						/>
						<Link
							to="https://www.amazon.com/"
							className="px-3 py-2 bg-amber-700 hover:bg-amber-900 hover:text-white text-gray-800 rounded-md"
						>
							Buy Now
						</Link>
					</div>
					<hr />
					<p>Sub Categories : {sub_category?.label}</p>
					<p>Seller Name : {sellerName}</p>
					<p>Seller Email : {sellerEmail}</p>
				</div>
			</div>
            <div className=" bg-[#fff9ed] px-5 py-10 mt-5">
                <p className="text-center mb-3 font-semibold text-xl text-amber-900">Description</p>
                <p className="leading-loose tracking-wider">{description}</p>
            </div>
		</div>
	);
};

export default ViewToyDetails;
