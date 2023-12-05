import React from "react";

const Gift = () => {
	return (
		<div
			className="w-full h-[400px] bg-cover rounded-md bg-opacity-80"
			style={{
				backgroundImage:
					'url("https://us.schleich-s.com/cdn/shop/files/gift_guide_holiday_1920x634_2378ac1f-2b3a-4108-b33f-d5711fba4b8c.png?v=1699629915&width=1946")',
			}}
		>
			<div className="p-[120px] space-y-3">
				<h2 className="text-3xl font-bold text-white font-kalam">
					Find the perfect gift!
				</h2>
				<p className="text-white font-semibold">
					Use our gift guide to shop the perfect gifts for everyone this holiday
					season.
				</p>
				<button className="p-2 rounded-md bg-amber-600 text-white text-[12px] font-semibold">
					Find Gift Now
				</button>
			</div>
		</div>
	);
};

export default Gift;
