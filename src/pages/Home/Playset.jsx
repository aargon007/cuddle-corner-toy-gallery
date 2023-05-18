import React from "react";

const Playset = () => {
	return (
		<div className="flex md:gap-10 flex-col md:flex-row bg-[#eee9d7] p-5 rounded-lg">
			<div className="w-full">
				<object>
					<param
						name="movie"
						value="https://www.youtube.com/embed/ZKe_t-gaKnA?rel=0&autoplay=0&color1=0x2E2E2E&color2=1x5C5C5C&border=0&showinfo=0&showsearch=0&fs=1&hl=en_US"
					></param>
					<param name="allowFullScreen" value="true"></param>
					<param name="allowscriptaccess" value="always"></param>
					<embed
						src="https://www.youtube.com/embed/ZKe_t-gaKnA?rel=0&autoplay=0&color1=0x2E2E2E&color2=0x5C5C5C&border=1&showinfo=0&showsearch=0&fs=1&hl=en_US"
                        className="w-full h-96"
						allowscriptaccess="always"
						allowFullScreen
						allownetworking="internal"
					></embed>
				</object>
			</div>
			<div className="w-full py-8">
				<h1 className="text-3xl mb-5 font-semibold">
					Make Fun With Our Animal Toys
				</h1>
				<p className="leading-loose">
					Animal toys are ideal educational tools for getting kids interested in
					nature, history, and science. At Terra by Battat™, we create realistic
					animal toys, dinosaur figurines, and playsets to inspire curious minds
					and encourage creative play.
				</p>
				<p className="leading-loose mt-5">
					Need a home for your animal kingdom? Pair your Terra by Battat™
					collectible animal figurines with these realistic playsets and
					accessories.
				</p>
			</div>
		</div>
	);
};

export default Playset;
