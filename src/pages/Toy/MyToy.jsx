import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import MySingleToy from "./MySingleToy";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const MyToy = () => {
	const { user } = useContext(AuthContext);

    const [myToys, setMyToys] = useState([]);
    const [control, setControl] = useState(false);
	const [sort, setSort] = useState(false);
	const [isAscending, setIsAscending] = useState(true);
	useEffect(() => {
        const loadData = async() => {
            const res = await fetch(`https://cuddle-corner-server-production.up.railway.app/my-toys?sellerEmail=${user?.email}&isAscending=${isAscending}`);
            const data = await res.json();
            setMyToys(data)
        }
        loadData()
	}, [user, control, isAscending]);

	const handleSort = () => {
		setIsAscending(!isAscending)
	}


	return (
		<div className="px-5 md:px-28 py-10  bg-[#eee9d7]">
			<h1 className="text-3xl text-center font-semibold text-green-700 uppercase mb-10">
				My Toy Product
			</h1>

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
							<th scope="col" className="tablehead" onClick={handleSort}>
								Price {isAscending ? <FaArrowUp className="ms-2 text-yellow-500 inline"/> : <FaArrowDown className="ms-2 text-yellow-500 inline"></FaArrowDown>}
							</th>
							<th scope="col" className="tablehead">
								Avaiable quantity
							</th>

							<th scope="col" className="tablehead">
								Actions
							</th>
						</tr>
					</thead>

						<tbody className="divide-y divide-gray-400 block md:table-row-group">
							{myToys?.map(toy => (
								<MySingleToy key={toy._id} toy={toy} setControl={setControl} control={control}/>
							))}
						</tbody>
				
				</table>
			</div>
		</div>
	);
};

export default MyToy;
