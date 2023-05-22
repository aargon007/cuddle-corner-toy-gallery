import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import SpinnerGlobal from "../shared/SpinnerGlobal";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const ShopByCategory = () => {
	const allCategory = [
		{ value: "wild", label: "Wild Animals" },
		{ value: "dinos", label: "Dinosaurs" },
		{ value: "families", label: "Families Animals" },
		{ value: "dogsCats", label: "Dogs and Cats" },
		{ value: "farm", label: "Farm Animals" },
	];

	let defaultValue = { value: "wild", label: "Wild Animals" };
	const [selectCategories, setSelectCategories] = useState(defaultValue);
	const [render, setRender] = useState(false);
	const [loadedCategory, setLoadedCategory] = useState([]);

	useEffect(() => {
		const loadData = async () => {
			const res = await fetch(
				`https://cuddle-corner-server-production.up.railway.app/category?value=${selectCategories.value}&label=${selectCategories.label}`
			);
			const data = await res.json();
			setLoadedCategory(data);
		};
		loadData();
	}, [render]);

	const handleSelectCategory = (category) => {
		setSelectCategories(category);
		setRender(!render);
	};

	return (
		<div className="px-2 py-16 sm:px-0">
            <h1 className="text-center text-2xl font-semibold mb-5 text-gray-800">Shop By Category</h1>
			<Tab.Group>
				<Tab.List className="max-w-4xl mx-auto flex md:flex-row flex-col gap-5 rounded-xl justify-between bg-blue-900/20 p-1 w-full">
					{allCategory.map((category) => (
						<Tab
							key={category.value}
							className={({ selected }) =>
								classNames(selected ? "activeLink" : "defaultLink")
							}
							onClick={() => handleSelectCategory(category)}
						>
							{category.label}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className="mt-2">
					<Tab.Panel static>
						<div className="grid md:grid-cols-2 gap-10 lg:grid-cols-3 xl:grid-cols-4 mt-5">
							{loadedCategory ? loadedCategory?.map((selectCategory) => (
								<div
									key={selectCategory._id}
									className="shadow-xl rounded-xl duration-500 hover:shadow-black/50 md:hover:scale-105 hover:shadow-xl"
								>
									<img
										className="w-full mx-auto px-10 pt-10"
										src={selectCategory?.image}
										alt=""
									/>

									<div className="relative px-6 pb-6 mt-6">
										<div className="flex justify-between">
											<h1 className="font-semibold">
												{selectCategory?.toyName}
											</h1>
											<h1 className=" bg-white rounded-full text-orange-500 font-bold px-3 py-2 leading-none flex items-center">
												${selectCategory?.price}
											</h1>
										</div>
										<div className="flex justify-between mt-2">
											
												<Rating
													style={{ maxWidth: 100, marginRight: 5 }}
													value={selectCategory?.rating}
													readOnly
												/>
											
											<Link to={`/toy/${selectCategory?._id}`} className=" text-white rounded-full bg-orange-500 hover:bg-orange-800 text-xs font-bold px-3 py-3 leading-none flex items-center">
												View Details
											</Link>
										</div>
									</div>
								</div>
							)) : <SpinnerGlobal/>}
						</div>
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
};

export default ShopByCategory;
