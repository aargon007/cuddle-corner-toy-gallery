import React from "react";
import useTitle from "../../Hooks/useTitle";

const Blog = () => {
	useTitle("Cuddle Corner | Blog");

	const blogList = [
		{
			title: "Arabian Mare (Farm Life by Schleich)",
			src: [
				"https://i0.wp.com/animaltoyforum.com/blog/wp-content/uploads/2023/10/20230612_182350-scaled.jpg?resize=1024%2C768&ssl=1",
				"https://i0.wp.com/animaltoyforum.com/blog/wp-content/uploads/2023/10/20230612_182421-scaled.jpg?resize=1024%2C768&ssl=1",
				"https://i0.wp.com/animaltoyforum.com/blog/wp-content/uploads/2023/10/20230612_182435-scaled.jpg?resize=1024%2C768&ssl=1",
				"https://i0.wp.com/animaltoyforum.com/blog/wp-content/uploads/2023/10/20230612_182531-scaled.jpg?resize=1024%2C768&ssl=1",
			],
			description: [
				"The Schleich Arabian Mare was released by the company in 2020 and is currently in production today. The model is #13908 and is part of the Horse Club series. The figure represents a light or riding type horse breed; however, this animal has a long and diverse history to explore.",
				"This breed originates in the Arabian Peninsula and is one of the earliest breeds recognized in the world. There is archaeological evidence of their presence dating back to around 4,500 years ago! These animals have been prized for centuries and have spread across the globe due to their utility. They have been used to develop other breeds of horse due to their desirable characteristics such as speed, refined conformation, endurance, and spirited nature. They have been used in nearly all modern breeds of riding horses.",
			],
		},
		{
			title: "Mule Deer (Hunting Toys by Big Country Farm Toys, LLC)",
			src: [
				"https://i0.wp.com/animaltoyforum.com/blog/wp-content/uploads/2023/11/BC_muledeer1-scaled.jpg?resize=1024%2C911&ssl=1",
				"https://i0.wp.com/animaltoyforum.com/blog/wp-content/uploads/2023/11/BC_muledeer2-scaled.jpg?resize=1024%2C968&ssl=1",
				"https://i0.wp.com/animaltoyforum.com/blog/wp-content/uploads/2023/11/BC_muledeer3.jpg?resize=1024%2C959&ssl=1",
				"https://i0.wp.com/animaltoyforum.com/blog/wp-content/uploads/2023/11/BC_muledeer4-scaled.jpg?resize=1024%2C981&ssl=1",
			],
			description: [
				"Big Country Farm Toys produces a variety of toys related to farming, rodeo, hunting, and fishing. Several of their animal figures are clearly borrowed from other well-known brands; for example their border collie is a Papo sculpt and their elk is a Safari Ltd. sculpt. Whether these represent bootlegging or a formal relationship between the companies, I am not sure (but I assume the latter). The mule deer however, appears to be an original sculpt, and is marked with ‘Big Country Farm Toys LLC’ on the underside.",
				"The figure stands approximately 6.0 cm at the shoulders for a scale of 1:13.3-1:17.7 depending on the subspecies.",
			],
		},
		{
			title: "Eurasian Wolf, Adult and Pup 2022 (Wild Animals by Papo)",
			src: [
				"https://i0.wp.com/animaltoyforum.com/blog/wp-content/uploads/2023/10/20231001_182720-scaled.jpg?resize=1024%2C768&ssl=1",
				"https://i0.wp.com/animaltoyforum.com/blog/wp-content/uploads/2023/10/20231001_182729-scaled.jpg?resize=1024%2C768&ssl=1",
				"https://i0.wp.com/animaltoyforum.com/blog/wp-content/uploads/2023/10/20231001_182818-scaled.jpg?resize=1024%2C768&ssl=1",
				"https://i0.wp.com/animaltoyforum.com/blog/wp-content/uploads/2023/10/20231001_182751-scaled.jpg?resize=1024%2C768&ssl=1",
			],
			description: [
				"A large feral beast stalked the land of Gèvaudan (roughly an area of some 50×56 miles or 80×90 kilometers) from 1764-1767. It may have attacked anywhere from 100-600 people during its reign of terror. No one can say for certain what it was, but the generally accepted theory is that some sort of wild wolf was responsible. It preyed largely on women and children during this time, but it did attack grown men also. The killings were gruesome; some were nearly consumed entirely with little more than a smear left on the ground; others were left largely intact but mangled from the ordeal. The beast apparently had a preferred killing method of decapitation, and on some occassions appeared to kill for sport rather than hunger. There are too many accounts of encounters to relay here, however the two of notoreity that I will mention are that of a young woman traveling at night and one of several young children keeping watch on their sheep.",
			],
		},
		{
			title: "Cassis Lapdog (Farm Life by Papo)",
			src: [
				"https://i0.wp.com/animaltoyforum.com/blog/wp-content/uploads/2023/10/20231001_182410.-1-1-scaled.jpg?resize=1024%2C646&ssl=1",
				"https://i0.wp.com/animaltoyforum.com/blog/wp-content/uploads/2023/10/20231001_183026-scaled.jpg?resize=1024%2C768&ssl=1",
				"https://i0.wp.com/animaltoyforum.com/blog/wp-content/uploads/2023/10/image00000024.jpg?w=1008&ssl=1",
				"https://i0.wp.com/animaltoyforum.com/blog/wp-content/uploads/2023/10/20231015_194153-scaled.jpg?resize=1024%2C768&ssl=1",
			],
			description: [
				"Moving on to the figure itself, it is rather plain and unassuming in overall appearance. The title of the figure, Cassis Lapdog, has confused collectors for some time, but the estimation is that it roughly translates to “[a] mixed breed of dog”. Models of mixed breeds have been attempted by others before but this one remains my favorite overall. It has that mixture of traits that present it as nearly real looking, with its clever expression while still being tame in appearance. Whether you read into his auburn eyes something of malevolence or something of a guiding shepherd, I find it to be a rather attractive model representing a less than attractive concept for many. I would recommend this model to anyone with a dog fancy; after all, it may turn out to be something supernaturally special. I hope you all have a Happy Halloween!",
			],
		},
	];

	return (
		<div>
			<div className="flex flex-col p-5 lg:px-48 lg:py-11">
				{blogList.map((blog, index) => (
					<div
						key={index}
						className="bg-gray-100 p-5 mb-10 flex items-stretch rounded-md gap-5"
					>
						<div className="grid grid-cols-2 gap-2 w-4/12">
							{blog?.src.map((image, index) => (
								<img
									key={index}
									src={image}
									className="rounded-md object-cover h-full w-full"
									alt=""
								/>
							))}
						</div>
						<div className="w-8/12">
							<h1 className="font-bold text-2xl mb-2">{blog?.title}</h1>
							<div className="my-3">
								{blog?.description.map((ans, index) => (
									<p key={index} className="leading-loose text-ellipsis mt-1">
										{ans}
									</p>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Blog;
