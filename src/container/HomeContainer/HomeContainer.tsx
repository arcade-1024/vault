import React, { useState } from "react";
import HomeLayout from "../../layout/HomeLayout/HomeLayout";
import { HiOutlineFingerPrint } from "react-icons/hi";
import ContinueCourse from "./components/ContinueCourse/ContinueCourse";
import CategoryRow from "./components/CategoryRow/CategoryRow";
import RecomendedCourse from "./components/RecomendedCourse/RecomendedCourse";
import NewCourse from "./components/NewCourse/NewCourse";
import WebinarRow from "./components/WebinarRow/WebinarRow";
import AvailableWebinar from "./components/AvailableWebinar/AvailableWebinar";
const HomeContainer = () => {
	const [password, setPassword] = useState("Hello");
	const [checkPassword, setCheckPassword] = useState("");
	const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
	const checkForPassword = () => {
		if (checkPassword === password) {
			setIsPasswordCorrect(true);
		} else setIsPasswordCorrect(false);
		setCheckPassword("");
	};
	return (
		<HomeLayout
			isPasswordCorrect={isPasswordCorrect}
			setIsPasswordCorrect={setIsPasswordCorrect}
		>
			<div className="px-7 ">
				<ContinueCourse />
				<CategoryRow />
				<RecomendedCourse />
				<NewCourse />
			</div>
			<div className="h-full w-full flex p-1 space-x-1 text-white absolute z-40 inset-0">
				<div
					className={`flex-1 border-4 border-stone-500  h-full p-10 relative duration-500 ${
						isPasswordCorrect && "-translate-x-full"
					}`}
				>
					<div className="relative z-50">
						<h1 className="font-semibold text-4xl">JAVA</h1>
						<p className="text-stone-500">
							this course is provisioned by{" "}
							<span className="font-semibold text-white">Nexxt Labs</span>
						</p>
						<div className="flex items-center  justify-between mt-5 text-indigo-400 w-2/3">
							<div className="flex items-center ">
								<div className="h-3 w-3 bg-indigo-500 rounded-full mr-2"></div>
								<span>Labs</span>
							</div>
							<div className="flex items-center ">
								<div className="h-3 w-3 bg-indigo-500 rounded-full mr-2"></div>
								<span>Exercise</span>
							</div>
							<div className="flex items-center ">
								<div className="h-3 w-3 bg-indigo-500 rounded-full mr-2"></div>
								<span>Do it yourself</span>
							</div>
						</div>
					</div>
					<div className="absolute bg-stone-700 inset-0 z-0  opacity-90"></div>
				</div>
				<div
					className={`flex-1 border-4 border-stone-500  h-full p-10 relative duration-500 ${
						isPasswordCorrect && "translate-x-full"
					}`}
				>
					<div className="absolute bg-stone-700 inset-0 z-0  opacity-90"></div>
				</div>
				<div
					className={` h-96 w-96 rounded-full border-4 border-stone-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-stone-700 shadow-lg shadow-stone-900 flex flex-col items-center justify-between p-10 ${
						isPasswordCorrect && "opacity-0 scale-0"
					} duration-500`}
				>
					<HiOutlineFingerPrint className="text-white" size={90} />
					<label className="flex flex-col items-center w-full" htmlFor="">
						<span className="mb-2 text-white font-medium">
							Enter the password
						</span>
						<input
							type={"password"}
							className="px-4 py-3 w-full border-2 border-indigo-500 rounded bg-transparent text-white ring-0 ring-transparent focus:outline-none"
							placeholder="Enter the password"
							onChange={(e) => setCheckPassword(e.target.value)}
							value={checkPassword}
						/>
					</label>
					<button
						className="px-4 py-2 bg-indigo-500 text-white font-semibold rounded-lg text-xl"
						onClick={checkForPassword}
					>
						Enter the Lab
					</button>
				</div>
			</div>
		</HomeLayout>
	);
};

export default HomeContainer;
