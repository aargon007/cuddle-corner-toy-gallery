import React from "react";

const Gallery = () => {
	return (
		<div className="md:px-28 px-5 flex md:flex-row flex-col gap-5">
			<div className="w-full relative overflow-hidden">
				<img
					src="https://terrabybattat.com/wp-content/uploads/grid_homepage-animals-in-tubes.jpg"
					className="h-full hover:scale-110 transition duration-500 cursor-pointer object-cover"
					alt=""
				/>
				<h1 className="absolute  bottom-0 left-1/4 text-center text-2xl font-bold text-blue-900">
					Animals in Tubes
				</h1>
			</div>
			<div className="grid md:grid-cols-2 gap-5 w-full">
				<div className="w-full relative overflow-hidden">
					<img
						src="https://terrabybattat.com/wp-content/uploads/grid_homepage-wild-animals.jpg"
						className="h-full hover:scale-110 transition duration-500 cursor-pointer object-cover"
						alt=""
					/>
					<h1 className="absolute  bottom-0 left-1/4 text-center text-2xl font-bold text-blue-900">
						Wild Animals
					</h1>
				</div>
				<div className="w-full relative overflow-hidden">
					<img
						src="https://terrabybattat.com/wp-content/uploads/grid_homepage-dinosaurs.jpg"
						className="h-full hover:scale-110 transition duration-500 cursor-pointer object-cover"
						alt=""
					/>
					<h1 className="absolute  bottom-0 left-1/4 text-center text-2xl font-bold text-blue-900">
						Dinosaurs
					</h1>
				</div>
				<div className="w-full relative overflow-hidden">
					<img
						src="https://terrabybattat.com/wp-content/uploads/grid_homepage-animal-families.jpg"
						className="h-full hover:scale-110 transition duration-500 cursor-pointer object-cover"
						alt=""
					/>
					<h1 className="absolute  bottom-0 left-1/4 text-center text-2xl font-bold text-blue-900">
						Families
					</h1>
				</div>
				<div className="w-full relative overflow-hidden">
					<img
						src="https://terrabybattat.com/wp-content/uploads/AN2104_LS-1-1024x1024.jpg"
						className="h-full hover:scale-110 transition duration-500 cursor-pointer object-cover"
						alt=""
					/>
					<h1 className="absolute  bottom-0 left-1/4 text-center text-2xl font-bold text-blue-900">
						Dogs & Cats
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
