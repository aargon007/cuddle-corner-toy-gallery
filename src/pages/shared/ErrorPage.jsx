import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import errorImage from "../../assets/404error.jpg";
import useTitle from "../../Hooks/useTitle";
import LazyLoad from "react-lazy-load";

const ErrorPage = () => {
	const navigate = useNavigate();

	useTitle("Cuddle Corner - page not found");

	const goBack = () => {
		navigate(-1);
	};

	return (
		<div className="flex flex-col items-center h-screen w-screen">
			<LazyLoad className="max-w-md">
				<img src={errorImage} alt="" className="max-w-md" />
			</LazyLoad>
			<h1 className="md:text-3xl text-2xl font-mono uppercase text-center text-red-700 font-semibold px-5 mb-10">
				page not found
			</h1>
			<button
				onClick={goBack}
				className="px-8 py-4 text-large font-semibold rounded bg-purple-600 text-gray-50 hover:text-gray-200"
			>
				Back to Previous page
			</button>
		</div>
	);
};

export default ErrorPage;
