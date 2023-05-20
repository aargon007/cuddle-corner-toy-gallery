import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import Swal from "sweetalert2";

const AddToy = () => {
	const { user } = useContext(AuthContext);
	const [selectedOption, setSelectedOption] = useState("");

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		reset,
	} = useForm();

	const options = [
		{ value: "wild", label: "Wild Animals" },
		{ value: "dinos", label: "Dinosaurs" },
		{ value: "families", label: "Families Animals" },
		{ value: "dogs&Cats", label: "Dogs & Cats" },
		{ value: "farm", label: "Farm Animals" },
	];

	const onSubmit = (data) => {
		data.sub_category = selectedOption;

		if (data) {
			fetch("https://cuddle-corner-server.vercel.app/add-toy", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			})
				.then((res) => res.json())
				.then((result) => {
					console.log(result);
					if (result.insertedId) {
						Swal.fire(
							"Good job!",
							"Your Toy Product Added Successfully!",
							"success"
						);
					}
				});
		}
		reset();
		console.log(data);
	};

	return (
		<div className="px-5 md:px-28 pb-10  bg-[#eee9d7] bg-blend-overlay bg-no-repeat bg-cover">
			<h1 className="text-3xl text-center font-semibold text-green-700 uppercase">
				fill form to add a toy
			</h1>
			<p className="mt-2 text-sm leading-6 text-gray-600 text-center">
				This information will be displayed publicly so be careful what you
				share.
			</p>
			<div className="shadow-md shadow-green-300 px-5 border-t border-t-green-100 mt-3">
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="border-b border-gray-900/10 pb-12">
						<div className="mt-7 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
							<div className="">
								<label
									htmlFor="toy-name"
									className="block font-medium leading-6 text-gray-900"
								>
									Toy name
								</label>
								<div className="mt-2">
									<input
										type="text"
										{...register("toyName", { required: true })}
										placeholder="Enter toy name"
										id="toy-name"
										className="add-toy-cls"
									/>
								</div>
								{errors.toyName?.type === "required" && (
									<p role="alert" className="text-red-400 mt-1">
										Toy name is required
									</p>
								)}
							</div>
							<div className="">
								<label
									htmlFor="url"
									className="block font-medium leading-6 text-gray-900"
								>
									Toy Image link
								</label>
								<div className="mt-2">
									<input
										type="url"
										{...register("image", { required: true })}
										placeholder="toy image url"
										id="url"
										autoComplete="url"
										className="add-toy-cls"
									/>
								</div>
								{errors.image?.type === "required" && (
									<p role="alert" className="text-red-400 mt-1">
										Toy image link is required
									</p>
								)}
							</div>
							<div className="">
								<label
									htmlFor="seller-name"
									className="block font-medium leading-6 text-gray-900"
								>
									Seller name
								</label>
								<div className="mt-2">
									<input
										type="text"
										{...register("sellerName")}
										placeholder="Enter your Name"
										defaultValue={user?.displayName ? user?.displayName : ""}
										id="seller-name"
										className="add-toy-cls"
									/>
								</div>
							</div>

							<div className="">
								<label
									htmlFor="sellerEmail"
									className="block font-medium leading-6 text-gray-900"
								>
									Seller Email address
								</label>
								<div className="mt-2">
									<input
										id="sellerEmail"
										value={user?.email}
										{...register("sellerEmail")}
										placeholder="Enter your email"
										type="email"
										className="add-toy-cls"
									/>
								</div>
							</div>

							<div className="">
								<label
									htmlFor="toy"
									className="block font-medium leading-6 text-gray-900"
								>
									Sub-Category
								</label>
								<div className="mt-2">
									<CreatableSelect
										isClearable
										options={options}
										defaultValue={selectedOption}
										required
										onChange={setSelectedOption}
									/>
								</div>
							</div>

							<div className="">
								<label
									htmlFor="price"
									className="block font-medium leading-6 text-gray-900"
								>
									Price
								</label>
								<div className="mt-2">
									<input
										type="number"
										{...register("price")}
										placeholder="$0"
										id="price"
										autoComplete="price"
										className="add-toy-cls"
									/>
								</div>
							</div>

							<div className="">
								<label
									htmlFor="quantity"
									className="block font-medium leading-6 text-gray-900"
								>
									Available Quantity
								</label>
								<div className="mt-2">
									<input
										type="number"
										{...register("quantity")}
										placeholder="available quantity"
										id="quantity"
										autoComplete="quantity"
										className="add-toy-cls"
									/>
								</div>
							</div>

							<div className="">
								<label
									htmlFor="rating"
									className="block font-medium leading-6 text-gray-900"
								>
									Rating
								</label>
								<div className="mt-2">
									<input
										type="text"
										{...register("rating")}
										placeholder="Rating"
										id="rating"
										autoComplete="rating"
										className="add-toy-cls"
									/>
								</div>
							</div>
						</div>
						<div className="mt-3">
							<label
								htmlFor="description"
								className="block font-medium leading-6 text-gray-900"
							>
								Product Description
							</label>
							<div className="mt-2">
								<textarea
									id="description"
									{...register("description")}
									placeholder="description"
									rows={3}
									className="add-toy-cls"
									defaultValue={
										"Dive in to Cuddle Corner's exciting animal collection!"
									}
								/>
							</div>
						</div>
						<input
							className="bg-green-600 hover:bg-green-800 text-white mt-5 px-10 py-2 text-center w-full"
							value="Add Toy"
							type="submit"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddToy;
