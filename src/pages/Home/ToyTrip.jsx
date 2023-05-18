import React from "react";
import { Link } from "react-router-dom";

const ToyTrip = () => {
	return (
		<div className="flex gap-10 items-center flex-col md:flex-row px-10 py-5 bg-[url(https://terrabybattat.com/wp-content/uploads/aroundtheworld-section-bg.png)] bg-no-repeat bg-[#eee9d7] bg-overlay bg-top">
			<div className="w-full flex">
				<img className="w-1/2 md:w-full"
					src="https://terrabybattat.com/wp-content/uploads/aroundtheworld-section-left-1.png"
					alt=""
				/>
                <img className=" md:hidden w-1/2"
					src="https://terrabybattat.com/wp-content/uploads/aroundtheworld-section-right..png"
					alt=""
				/>
			</div>
			<div className="w-full">
				<h1 className="text-3xl font-semibold">TAKE A TRIP AROUND THE WORLD</h1>
				<p className="leading-loose">
					With Terra by Battat™ animal toys, you can go anywhere in the world.
					Swing with gorillas through the trees of the African jungle. Fly with
					majestic eagles over the forests of North America. Swim with sea lions
					through the waves of the Arctic. Anything is possible with your
					imagination!
				</p>
                <Link to='all-toys' className="activeLink inline-block mt-3">SEE THEM ALL</Link>
			</div>
			<div className="w-full">
				<img className="hidden md:block"
					src="https://terrabybattat.com/wp-content/uploads/aroundtheworld-section-right..png"
					alt=""
				/>
			</div>
		</div>
	);
};

export default ToyTrip;
