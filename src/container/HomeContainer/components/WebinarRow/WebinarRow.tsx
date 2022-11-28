import React from "react";
import SectionHeader from "../../../../common/SectionHeader/SectionHeader";
import { CATEGORY_TYPES } from "../../../../constants/continueCourseData";
import { CategoryType } from "../CategoryRow/CategoryRow";

const WebinarRow = () => {
	return (
		<div className="pb-4">
			<SectionHeader title="Webinar (12)" />
			<div className="max-w-2xl  flex items-center overflow-x-auto scrollBarHidden mt-5 space-x-8 pb-4">
				{CATEGORY_TYPES.map((category) => (
					<CategoryType title={category.title} image={category.img} />
				))}
			</div>
		</div>
	);
};

export default WebinarRow;
