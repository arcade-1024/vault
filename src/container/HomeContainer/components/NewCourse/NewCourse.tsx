import React, { ReactNode } from "react";
import { Play, PlusCircle } from "react-feather";
import SectionHeader from "../../../../common/SectionHeader/SectionHeader";
import { CategoryType } from "../CategoryRow/CategoryRow";

const NewCourse = () => {
	return (
		<div className="mb-2">
			<SectionHeader title="New course (13)" />
			<div className="max-w-2xl  flex items-center overflow-x-scroll mt-5 space-x-4 pb-6 scrollBarHidden">
				<div className="w-96 flex-shrink-0">
					<NewCourseCard
						cardBody={
							<>
								<h1 className="text-lg leading-6 uppercase font-semibold">
									Architecture
								</h1>
								<p className="leading-4 uppercase text-sm">course</p>
								<p className="text-sm leading-5">4 HOURS</p>
							</>
						}
						img={
							<>
								<img src="/assets/arc.png" alt="" />
								<div className="absolute left-2 bottom-2 bg-white px-2 leading-4 py-1 text-sm font-semibold rounded shadow-md ">
									EXPERT
								</div>
								<div className="absolute top-1/2 right-1/2 bg-white transform  -translate-y-1/2 p-2 flex items-center justify-center rounded-full shadow-md">
									<Play />
								</div>
							</>
						}
					/>
				</div>
				<div className="w-96 flex-shrink-0">
					<NewCourseCard
						cardBody={
							<>
								<h1 className="text-lg leading-6 uppercase font-semibold">
									Architecture
								</h1>
								<p className="leading-4 uppercase text-sm">course</p>
								<p className="text-sm leading-5">4 HOURS</p>
							</>
						}
						img={
							<>
								<img src="/assets/arc.png" alt="" />
								<div className="absolute left-2 bottom-2 bg-white px-2 leading-4 py-1 text-sm font-semibold rounded shadow-md ">
									EXPERT
								</div>
								<div className="absolute top-1/2 right-1/2 bg-white transform  -translate-y-1/2 p-2 flex items-center justify-center rounded-full shadow-md">
									<Play />
								</div>
							</>
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default NewCourse;

export interface NewCourseCardInterface {
	img: ReactNode;
	cardBody: ReactNode;
}
export const NewCourseCard = ({ img, cardBody }: NewCourseCardInterface) => {
	return (
		<div className="w-full bg-indigo-100 rounded-md shadow-md  flex-shrink-0 flex flex-col">
			<div className="flex-1 w-full relative flex items-center justify-center">
				{img}
			</div>
			<div className="flex items-center justify-between px-3 py-2 border-t-2 border-indigo-300">
				<div className="">{cardBody}</div>
				<PlusCircle />
			</div>
		</div>
	);
};
