import React, { useRef } from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";

const Banner = () => {
    
	return (
		<Carousel className="" transition={{ duration: 2 }}  autopla  autoplayDelay={3000} loop >
			<div className="relative min-h-[calc(100vh-164px)] w-full">
				<img
					src="https://terrabybattat.com/wp-content/uploads/AN6003_LS_A.jpg"
					alt="image 1"
					className=" w-full h-[calc(100vh-164px)] object-cover"
				/>
				<div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
					<div className="w-3/4 text-center md:w-2/4">
						<Typography
							variant="h1"
							color="white"
							className="mb-4 text-3xl md:text-4xl lg:text-5xl"
						>
							All The Little Dinos
						</Typography>
						<Typography
							variant="lead"
							color="white"
							className="mb-12 opacity-80"
						>
							Dig up loads of prehistoric fun!
						</Typography>
						<div className="flex justify-center gap-2">
							<Button size="lg" color="white">
								Explore
							</Button>
							<Button size="lg" color="white" variant="text">
								Gallery
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className="relative min-h-[calc(100vh-164px)] w-full">
				<img
					src="https://terrabybattat.com/wp-content/uploads/header-cateogry_animal-toys-families.jpg"
					alt="image 1"
					className=" w-full h-[calc(100vh-164px)] object-cover"
				/>
				<div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
					<div className="w-3/4 text-center md:w-2/4">
						<Typography
							variant="h1"
							color="white"
							className="mb-4 text-3xl md:text-4xl lg:text-5xl"
						>
							Play with  Our Family Toys
						</Typography>
						<Typography
							variant="lead"
							color="white"
							className="mb-12 opacity-80"
						>
							Learn about the environment with our selection of wild animal families. These toys are perfect for sensory play.
						</Typography>
						<div className="flex justify-center gap-2">
							<Button size="lg" color="white">
								Explore
							</Button>
							<Button size="lg" color="white" variant="text">
								Gallery
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className="relative min-h-[calc(100vh-164px)] w-full">
				<img
					src="https://terrabybattat.com/wp-content/uploads/header-cateogry_animal-toys-wild.jpg"
					alt="image 1"
					className=" w-full h-[calc(100vh-164px)] object-cover"
				/>
				<div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
					<div className="w-3/4 text-center md:w-2/4">
						<Typography
							variant="h1"
							color="white"
							className="mb-4 text-3xl md:text-4xl lg:text-5xl"
						>
							All The Wild Animals on Your Side
						</Typography>
						<Typography
							variant="lead"
							color="white"
							className="mb-12 opacity-80"
						>
							Get outside! Lets get wild with these detailed animals from the mountains to the jungle.
						</Typography>
						<div className="flex justify-center gap-2">
							<Button size="lg" color="white">
								Explore
							</Button>
							<Button size="lg" color="white" variant="text">
								Gallery
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className="relative min-h-[calc(100vh-164px)] w-full">
				<img
					src="https://terrabybattat.com/wp-content/uploads/header-cateogry_animal-toys-farm.jpg"
					alt="image 1"
					className=" w-full h-[calc(100vh-164px)] object-cover"
				/>
				<div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
					<div className="w-3/4 text-center md:w-2/4">
						<Typography
							variant="h1"
							color="white"
							className="mb-4 text-3xl md:text-4xl lg:text-5xl"
						>
							Want To Play with our Farm Toys?
						</Typography>
						<Typography
							variant="lead"
							color="white"
							className="mb-12 opacity-80"
						>
							It's a day at the farm, with Terra's baryard gang of realistic farm animal toys.
						</Typography>
						<div className="flex justify-center gap-2">
							<Button size="lg" color="white">
								Explore
							</Button>
							<Button size="lg" color="white" variant="text">
								Gallery
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className="relative min-h-[calc(100vh-164px)] w-full">
				<img
					src="https://terrabybattat.com/wp-content/uploads/header-cateogry_animal-toys-dogs-cats.jpg"
					alt="image 1"
					className=" w-full h-[calc(100vh-164px)] object-cover"
				/>
				<div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
					<div className="w-3/4 text-center md:w-2/4">
						<Typography
							variant="h1"
							color="white"
							className="mb-4 text-3xl md:text-4xl lg:text-5xl"
						>
							Dogs & Cats 
						</Typography>
						<Typography
							variant="lead"
							color="white"
							className="mb-12 opacity-80"
						>
							Adopt a pet or maybe two! These realistic small dog and cat toys are purrrfect for playtime and ready to love.
						</Typography>
						<div className="flex justify-center gap-2">
							<Button size="lg" color="white">
								Explore
							</Button>
							<Button size="lg" color="white" variant="text">
								Gallery
							</Button>
						</div>
					</div>
				</div>
			</div>
			
				
		</Carousel>
	);
};

export default Banner;
