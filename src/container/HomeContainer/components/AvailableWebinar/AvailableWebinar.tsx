import React from "react";
import NewCourse, { NewCourseCard } from "../NewCourse/NewCourse";
import { Play } from "react-feather";
import SectionHeader from "../../../../common/SectionHeader/SectionHeader";

const AvailableWebinar = () => {
	return (
		<div className="">
			<SectionHeader title="Available Webinar (16)" />
			<div className="max-w-2xl  flex flex-col items-center  mt-5  space-y-5 pb-4">
				<NewCourseCard
					cardBody={
						<>
							<h1 className="text-lg leading-6 uppercase font-semibold">
								design talk
							</h1>
							<p className="leading-4 text-sm uppercase">MS. subalakshmi</p>
						</>
					}
					img={
						<div className="py-2">
							<img src="/assets/arc.png" alt="" />
							<div className="absolute left-2 bottom-2 bg-white px-2 leading-4 py-1 text-sm font-semibold rounded shadow-md ">
								EXPERT
							</div>
							<div className="absolute top-1/2 right-1/2 bg-white transform  -translate-y-1/2 p-2 flex items-center justify-center rounded-full shadow-md">
								<Play />
							</div>
						</div>
					}
				/>
				<NewCourseCard
					cardBody={
						<>
							<h1 className="text-lg leading-6 uppercase font-semibold">
								design talk
							</h1>
							<p className="leading-4 text-sm uppercase">MS. subalakshmi</p>
						</>
					}
					img={
						<div className="py-2">
							<img src="/assets/arc.png" alt="" />
							<div className="absolute left-2 bottom-2 bg-white px-2 leading-4 py-1 text-sm font-semibold rounded shadow-md ">
								EXPERT
							</div>
							<div className="absolute top-1/2 right-1/2 bg-white transform  -translate-y-1/2 p-2 flex items-center justify-center rounded-full shadow-md">
								<Play />
							</div>
						</div>
					}
				/>
			</div>
		</div>
	);
};

export default AvailableWebinar;
