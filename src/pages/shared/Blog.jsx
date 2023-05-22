import React from "react";
import useTitle from "../../Hooks/useTitle";

const Blog = () => {
	useTitle("Cuddle Corner | Blog");

	const blogList = [
		{
			question:
				"What is an access token and refresh token? How do they work and where should we store them on the client-side?",
			answer: [
				"Access tokens are credentials used to access protected resources. Access tokens are used as bearer tokens. A bearer token means that the bearer (who holds the access token) can access authorized resources without further identification. Because of this, it is important that bearer tokens be protected. These tokens usually have a short lifespan for security purpose. When it expires, the user must authenticate again to get a new access token limiting the exposure of the fact that it is a bearer token.  Access tokens are used to inform an API that the bearer of the token has been authorized to access the API and perform a predetermined set of actions specified by the scope. It is used to authorize API access.",
				"Refresh token is a long-lived token compared to the access token and is used to request a new access token in cases where it is expired. It can be considered as credentials used to obtain access tokens. It's allowed for long-lived access and highly confidential. Refresh tokens can be used for grant types – authorization code and password credentials grant. As access token has defined lifetimes, and there could be a possibility that the current access token becomes invalid or expires. This is the token used to request new access tokens without user interaction. ",
			],
		},
		{
			question: "Compare SQL and NoSQL databases?",
			answer: [
				"SQL databases define and manipulate data-based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice, especially for great complex queries. But from another side, it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also, all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system. ",
				"A NoSQL database has a dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based, or organized as a key-value store. This flexibility means that documents can be created without having a defined structure first. Also, each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go. ",
			],
		},
		{
			question: "What is express js? What is Nest JS ?",
			answer: [
				"Express.js, sometimes also referred to as “Express,” is a minimalist, fast, and Sinatra-like Node.js backend framework that provides robust features and tools for developing scalable backend applications. It gives you the routing system and simplified features to extend the framework by developing more powerful components and parts depending on your application use cases.The framework provides a set of tools for web applications, HTTP requests and responses, routing, and middleware for building and deploying large-scale, enterprise-ready applications.Express.js is used for a wide range of things in the JavaScript/Node.js ecosystem — you can develop applications, API endpoints, routing systems, and frameworks with it.",
				"NestJS is a progressive Node.js framework that helps build server-side applications. Nest extends Node.js frameworks like Express or Fastify adding modular organization and a wide range of other libraries to take care of repetitive tasks. It’s open-source, uses TypeScript, and is a very versatile Node.js framework for building backend systems. It helps scale Node.js servers and supports several databases such as MongoDB, Redis, and Apache Cassandra..",
			],
		},
		{
			question: "What is MongoDB aggregate and how does it work?",
			answer: [
				"MongoDB Aggregate is used to process the data or records and return the combined output as a result. Aggregate operation in MongoDB will be used to group the values from the multiple documents with each other. After the grouping of values, it will perform various operations on grouped data and then return the combined single result as output. MongoDB aggregate is significant and useful in MongoDB to return a single result of data from multiple documents. MongoDB aggregate is similar to the count (*) with the group by function in SQL language it will continue similar work in MongoDB.",
				"There is no better method than MongoDB Aggregations when we need to collect the metrics from MongoDB for any graphical illustration or maybe other operations. Aggregation in MongoDB is responsible for processing the data, which results in the calculated outputs, generally by assembling the data from several documents and then executes in various ways on those assembled data in order to yield one collective result. It practices documents and then yield computed outputs and thus execute a range of operations on the assembled data to return only one result.",
			],
		},
	];

	return (
		<div>
			<div className="flex flex-col p-5 lg:px-48 lg:py-11">
				{blogList.map((blog) => (
					<div className="bg-gray-100 p-5 mb-10">
						<h1 className="font-bold text-2xl mb-2">{blog?.question}</h1>
						<div className="my-3">
							{blog?.answer.map((ans) => (
								<p className="leading-loose">{ans}</p>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Blog;
