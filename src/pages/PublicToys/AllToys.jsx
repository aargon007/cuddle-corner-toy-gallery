import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Swal from "sweetalert2";

const AllToys = () => {

    const loadedToys = useLoaderData();
	// console.log(loadedToys.length);

    const [toys, setToys] = useState(loadedToys)
	const [searchKey, setSearchKey] = useState("");

	const handleSearch = () => {
        fetch(`https://cuddle-corner-server-production.up.railway.app/all-toys/${searchKey}`)
          .then((res) => res.json())
          .then((data) => {
            // console.log(data.length);
            if(data.length == 0){
                Swal.fire(
                    "Ooops!",
                    "No match found",
                    "error"
                );
            }

            setToys(data)
          });
      };
    
	return (
		<div className="px-5 md:px-28 py-10  bg-[#eee9d7]">

			<h1 className="text-3xl text-center font-semibold text-green-700 uppercase mb-10">
				All Animal Toys
			</h1>

			<div
				className="flex items-center max-w-md mx-auto bg-white rounded-lg mb-8"
				x-data="{ search: '' }"
			>
				<div className="w-full">
					<input
						type="search"
                        onChange={(e) => setSearchKey(e.target.value)}
						className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none"
						placeholder="search"
						x-model="search"
					/>
				</div>
				<div>
					<button
                    onClick={handleSearch}
						type="submit"
						className="flex items-center bg-blue-500 justify-center w-12 h-12 text-white rounded-r-lg"
					>
						<FiSearch className="w-5 h-5"/>
					</button>
				</div>
			</div>

			<div>
				<table className="min-w-full divide-y divide-gray-200 table-auto block md:table">
					<thead className="bg-gray-50 block md:table-header-group">
						<tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
							<th scope="col" className="tablehead">
								Toy Name
							</th>
							<th scope="col" className="tablehead">
								Sub-Category
							</th>
							<th scope="col" className="tablehead">
								Price
							</th>
							<th scope="col" className="tablehead">
								Avaiable quantity
							</th>
							<th scope="col" className="tablehead">
								Seller
							</th>
							<th scope="col" className="tablehead">
								Actions
							</th>
						</tr>
					</thead>

					<tbody className="divide-y divide-gray-400 block md:table-row-group">
						{toys.map((toy) => (
							<tr key={toy._id} className="hover:bg-gray-100 bg-white border-t border-gray-500 block md:table-row">
								<td className="tdstyle">
									<span className="inline-block w-1/3 md:hidden font-bold">
										Toy Name :
									</span>
									<div className="inline-flex items-center">
										<img
											className="h-10 w-10 rounded-full"
											src={toy?.image}
											alt=""
										/>

										<div className="ml-4 font-medium text-gray-900">
											{toy?.toyName}
										</div>
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
									$ {toy?.price ? toy?.price : "5"}
								</td>
								<td className="tdstyle">
									<span className="inline-block w-1/3 md:hidden font-bold">
										Available Quantity :
									</span>
									{toy?.quantity ? toy?.quantity : "stock out"}
								</td>
								<td className="tdstyle">
									<span className="inline-block w-1/3 md:hidden font-bold">
										Seller Name :
									</span>
									{toy?.sellerName ? toy?.sellerName : "Anonymous"}
								</td>
								<td className="tdstyle">
									<Link to={`/toy/${toy._id}`} className="py-2 px-3 inline-flex text-xs text-white leading-5 font-semibold rounded-full bg-green-500 hover:bg-blue-700">
										View Details
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AllToys;
