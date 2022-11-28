import React from "react";
import { Menu, Bell, Search } from "react-feather";
const Navbar = () => {
	return (
		<div className="w-[672px] flex items-center justify-between px-4 py-3 fixed top-0 z-50 bg-white shadow-md">
			<div className="flex items-center w-full">
				<Menu />
				<div className="h-10 w-10 rounded-full ml-4 bg-gray-400"></div>
				<div className="ml-2">
					<h1 className="font-semibold text-lg">User Name</h1>
					<p className="text-sm">TCS</p>
				</div>
			</div>
			<div className="flex items-center">
				<Bell />
				<Search className="ml-6" />
			</div>
		</div>
	);
};

export default Navbar;
