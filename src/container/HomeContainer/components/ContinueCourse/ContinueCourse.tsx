import React from "react";
import SectionHeader from "../../../../common/SectionHeader/SectionHeader";
import { CONTINUE_COURSE_DATA } from "../../../../constants/continueCourseData";


const ContinueCourse = () => {
	return (
		<div className="py-8">
			<SectionHeader title="Continue course" />
			<div className="grid grid-cols-2 gap-4  mt-7">
				{CONTINUE_COURSE_DATA.map((course) => (
					<Card
						courseName={course.name}
						completion={course.completion}
						provider={course.provider}
						timeLeft={course.timeLeft}
						imgSrc={course.img}
						key={`${course.name}-${course.timeLeft}`}
					/>
				))}
			</div>
		</div>
	);
};

export default ContinueCourse;

export interface CardInterface {
	courseName: string;
	provider: string;
	timeLeft: string;
	completion: number;
	imgSrc: string;
}
const Card = ({
	courseName,
	provider,
	timeLeft,
	completion,
	imgSrc,
}: CardInterface) => {
	return (
		<div className="flex items-center bg-indigo-100 relative pt-1  rounded-md hover:shadow-md transition duration-300 cursor-pointer overflow-hidden">
			<div className="h-20 w-20 flex items-center justify-center">
				<img src={imgSrc} height={64} width={64} alt="" />
			</div>
			<div className="flex-1 h-full flex flex-col pt-2 justify-between">
				<div className="pb-2  pr-4">
					<p className="text-right w-full text-xs">{timeLeft} min left</p>
					<h1 className="font-semibold text-lg">{courseName}</h1>
					<p>{provider}</p>
				</div>
				<div className="bg-gray-300">
					<div
						className="h-1 bg-black rounded-full"
						style={{ width: `${completion}%` }}
					></div>
				</div>
			</div>
		</div>
	);
};
