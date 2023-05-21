import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const MySingleToy = ({ toy, setControl, control }) => {
	let [isOpen, setIsOpen] = useState(false);

	const closeModal = () => {
		setIsOpen(false);
	};

	const openModal = () => {
		setIsOpen(true);
	};

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const handleToyUpdate = (data) => {
		data.price = parseFloat(data.price)
		// console.log(data);
		fetch(
			`https://cuddle-corner-server-production.up.railway.app/updateToy/${toy._id}`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			}
		)
			.then((res) => res.json())
			.then((result) => {
				if (result.modifiedCount > 0) {
					setControl(!control);
					Swal.fire("Success!", "Data Updated!", "success");
				}
				closeModal();
				// console.log(result);
			});
	};

	const handleDeleteToy = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(
					`https://cuddle-corner-server-production.up.railway.app/deleteToy/${id}`,
					{
						method: "DELETE",
					}
				)
					.then((res) => res.json())
					.then((data) => {
						// console.log(data);
						if (data.deletedCount > 0) {
							setControl(!control);
							Swal.fire(
								'Deleted!',
								'Your file has been deleted.',
								'success'
							  )
						}
					});
			}
		});
	};

	return (
		<>
			<tr className="hover:bg-gray-100 bg-white border-t border-gray-500 block md:table-row">
				<td className="tdstyle">
					<span className="inline-block w-1/3 md:hidden font-bold">
						Toy Name :
					</span>
					<div className="inline-flex items-center">
						<img className="h-10 w-10 rounded-full" src={toy?.image} alt="" />

						<div className="ml-4 font-medium text-gray-900">{toy?.toyName}</div>
					</div>
				</td>
				<td className="tdstyle">
					<span className="inline-block w-1/3 md:hidden font-bold">
						Sub Category :
					</span>
					{toy?.sub_category?.label}
				</td>
				<td className="tdstyle">
					<span className="inline-block w-1/3 md:hidden font-bold">
						Price :
					</span>
					$ {toy?.price}
				</td>
				<td className="tdstyle">
					<span className="inline-block w-1/3 md:hidden font-bold">
						Available Quantity :
					</span>
					{toy?.quantity}
				</td>

				<td className="px-5 py-2 border border-gray-100 md:border-none md:table-cell flex items-center">
					<button
						onClick={openModal}
						className="py-2 px-5 me-3 text-xs text-white leading-5 font-semibold rounded-lg bg-green-500 hover:bg-green-900"
					>
						Edit
					</button>
					<Transition appear show={isOpen} as={Fragment}>
						<Dialog as="div" className="relative z-10" onClose={closeModal}>
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0"
								enterTo="opacity-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
							>
								<div className="fixed inset-0 bg-black bg-opacity-80" />
							</Transition.Child>

							<div className="fixed inset-0 overflow-y-auto">
								<div className="flex min-h-full items-center justify-center p-4 text-center">
									<Transition.Child
										as={Fragment}
										enter="ease-out duration-300"
										enterFrom="opacity-0 scale-95"
										enterTo="opacity-100 scale-100"
										leave="ease-in duration-200"
										leaveFrom="opacity-100 scale-100"
										leaveTo="opacity-0 scale-95"
									>
										<Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-gray-200 p-6 text-left align-middle shadow-xl transition-all">
											<Dialog.Title
												as="h3"
												className="text-lg font-semibold leading-6 text-green-600 text-center"
											>
												Toy Name : {toy?.toyName}
											</Dialog.Title>

											<form onSubmit={handleSubmit(handleToyUpdate)}>
												<div className="pb-5">
													<div className="mt-7 grid grid-cols-1 gap-x-6 gap-y-8">
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
																	{...register("image")}
																	placeholder="toy image url"
																	id="url"
																	defaultValue={toy?.image}
																	className="add-toy-cls"
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
																	defaultValue={toy?.price}
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
																	defaultValue={toy?.quantity}
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
																rows={4}
																className="add-toy-cls"
																defaultValue={toy?.description}
															/>
														</div>
													</div>
													<div className="flex gap-3 items-center">
														<button
															onClick={closeModal}
															className="text-white bg-gray-800 px-10 py-2 mt-5 rounded-md w-full"
														>
															Close
														</button>
														<input
															className="bg-green-600 cursor-pointer hover:bg-green-800 text-white mt-5 px-10 py-2 text-center w-full rounded-md"
															value="Update Data"
															type="submit"
														/>
													</div>
												</div>
											</form>
										</Dialog.Panel>
									</Transition.Child>
								</div>
							</div>
						</Dialog>
					</Transition>
					<button onClick={() => handleDeleteToy(toy?._id)} className="py-2 px-3 text-xs text-white leading-5 font-semibold rounded-lg bg-red-400 hover:bg-red-900">
						Delete
					</button>
				</td>
			</tr>
		</>
	);
};

export default MySingleToy;
