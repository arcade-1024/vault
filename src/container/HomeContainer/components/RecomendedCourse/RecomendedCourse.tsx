import React from "react";
import SectionHeader from "../../../../common/SectionHeader/SectionHeader";
import { RECOMMENDED_COURSE } from "../../../../constants/continueCourseData";

const RecomendedCourse = () => {
	return (
		<div className="mb-4">
			<SectionHeader title="Recommended course" />
			<div className="max-w-2xl  flex items-center overflow-x-auto scrollBarHidden mt-5 space-x-8 pb-4">
				{RECOMMENDED_COURSE.map((course) => (
					<RecommendedCourseCard
						img={course.img}
						provider={course.provider}
						title={course.title}
					/>
				))}
			</div>
		</div>
	);
};

export default RecomendedCourse;

interface RecommendedCourseCardInterface {
	title: string;
	provider: string;
	img: string;
}
const RecommendedCourseCard = ({
	img,
	provider,
	title,
}: RecommendedCourseCardInterface) => {
	return (
		<div className="h-40 w-40 shadow-md bg-indigo-50  rounded-lg flex flex-col items-center justify-between p-2 hover:bg-indigo-300 transition-all hover:text-white hover:border-indigo-800 hover:shadow-md cursor-pointer">
      <div className=" w-20 h-20 flex items-center justify-center">
        <img src={img} height={60} width={60} alt="" />
      </div>
			<div>
				<h1 className="text-lg uppercase font-semibold ">{title}</h1>
				<p className="text-xs text-center">{provider}</p>
			</div>
		</div>
	);
};
