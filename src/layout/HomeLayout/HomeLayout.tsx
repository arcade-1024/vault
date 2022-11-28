import React, { ReactNode } from "react";
import Header from "../../common/Header/Header";
export interface DASHBOARD_PROPS {
	children: ReactNode;
	setIsPasswordCorrect: React.Dispatch<React.SetStateAction<boolean>>;
	isPasswordCorrect: boolean;
}

const HomeLayout = ({
	children,
	isPasswordCorrect,
	setIsPasswordCorrect,
}: DASHBOARD_PROPS) => {
	return (
		<div className={`flex flex-col `}>
			<Header
				isPasswordCorrect={isPasswordCorrect}
				setIsPasswordCorrect={setIsPasswordCorrect}
			/>
			<div className={`flex flex-row bg-stone-800 overflow-y-auto `}>
				<div
					className="flex justify-center w-full mt-16 relative"
					style={{ minHeight: "calc(100vh - 64px)" }}
				>
					{children}
				</div>
			</div>
		</div>
	);
};

export default HomeLayout;
