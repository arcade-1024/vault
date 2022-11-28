import { title } from "process";
import React, { ReactNode } from "react";
import { BookOpen, Calendar, Home, ShoppingBag, Tablet, User } from "react-feather";

const BottomNavbar = () => {
	return (
		<div className="w-[672px] flex items-center justify-between px-4 fixed bottom-0 z-50 bg-gray-200 rounded-full ">
			<div className="flex items-center px-16 py-3 justify-between w-full relative">
				<NavItem title="self" icon={<User />} />
				<NavItem title="class" icon={<BookOpen />} />
				<div className="relative cursor-pointer">
					<div className="absolute h-16 w-16 bg-indigo-200 -top-14 -left-8 rounded-full flex flex-col items-center justify-center">
						<Home size={16} />
						<p className="text-xs mt-1 font-semibold">HOME</p>
					</div>
				</div>
				<NavItem title="My course" icon={<ShoppingBag />} />
				<NavItem title="Calender" icon={<Calendar />} />
			</div>
		</div>
	);
};

export default BottomNavbar;

interface NavItemInterface {
	icon: ReactNode;
	title: string;
}
const NavItem = ({ icon, title }: NavItemInterface) => {
	return (
		<div className="flex flex-col items-center justify-center flex-shrink-0 w-8 cursor-pointer">
			{icon}
			<h1 className="leading-5 truncate uppercase mt-1 font-semibold">{title}</h1>
		</div>
	);
};
