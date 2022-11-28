import React, { useState } from "react";
import {
	AlignCenter,
	AlignJustify,
	AlignLeft,
	ChevronDown,
	ChevronUp,
} from "react-feather";
import Menu from "../Menu/Menu";
import MenuItem from "../Menu/MenuItem";
export interface HeaderInterface {
	setIsPasswordCorrect: React.Dispatch<React.SetStateAction<boolean>>;
	isPasswordCorrect: boolean;
}
const Header = ({
	isPasswordCorrect,
	setIsPasswordCorrect,
}: HeaderInterface) => {
	const [openProfileMenu, setOpenProfileMenu] = useState(false);
	const [isSigningOut, setIsSigningOut] = useState(false);

	const showSignOutButtonMessage = () => {
		if (isSigningOut) {
			return (
				<div className="flex items-center justify-center">
					<span>Signing out</span>
				</div>
			);
		} else {
			return <span>Sign out</span>;
		}
	};
	return (
		<div className="fixed z-50 flex flex-row items-center w-full  bg-stone-500 text-white  px-6 py-1.5">
			<AlignJustify />
			<div className="flex items-center space-x-5 font-semibold text-sm ml-5 text-white">
				<div>Self</div>
				<div>Classroom</div>
				<div>Events</div>
				<div>Labs</div>
				<div>Exams</div>
				<div>Community</div>
			</div>
			<div className="flex-1"></div>
			<Menu
				open={openProfileMenu}
				setOpen={setOpenProfileMenu}
				name="Profile"
				avatar={
					<div className="flex items-center cursor-pointer">
						<img
							id="profileBtn"
							className="w-11 h-11 mt-1.5 z-0 border border-gray-400 rounded-full shadow-lg"
							src="/assets/profile.svg"
						/>
						<div className="mx-4 text-white">
							<p className="leading-5 text-lg">FirstName</p>
							<p className="leading-4 text-sm">email@gmail.com</p>
						</div>
						{openProfileMenu ? (
							<ChevronUp size={20} className="text-gray-700" strokeWidth={3} />
						) : (
							<ChevronDown
								size={20}
								className="text-gray-700"
								strokeWidth={3}
							/>
						)}
					</div>
				}
			>
				{/* <MenuItem
					primaryText={<p className="truncate w-44">FirstName</p>}
					secondaryText={<p className="truncate w-44">email@gmail.com</p>}
				/> */}
				<MenuItem
					primaryText={showSignOutButtonMessage()}
					className={`${isSigningOut && "cursor-wait pointer-events-none"}`}
					onClick={() => {
						setIsPasswordCorrect(false);
						setOpenProfileMenu(false);
					}}
				/>
			</Menu>
		</div>
	);
};

export default Header;
