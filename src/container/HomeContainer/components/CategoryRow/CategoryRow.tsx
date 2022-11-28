import React from "react";
import SectionHeader from "../../../../common/SectionHeader/SectionHeader";
import { CATEGORY_TYPES } from "../../../../constants/continueCourseData";
const CategoryRow = () => {
	return (
		<div className="mb-4">
			<SectionHeader title="Category" />
			<div className="max-w-2xl  flex items-center overflow-x-auto scrollBarHidden mt-5 space-x-8 pb-4">
				{CATEGORY_TYPES.map((category) => (
					<CategoryType title={category.title} image={category.img} />
				))}
			</div>
		</div>
	);
};

export default CategoryRow;

export interface CategoryTypeInterface {
	title: string;
	image: string;
}
export const CategoryType = ({ image, title }: CategoryTypeInterface) => {
	return (
		<div className="flex flex-col items-center">
			<div className="h-20 w-20 rounded-full bg-indigo-100 flex-shrink-0 flex items-center justify-center">
				<img src={image} height={40} width={40} />
			</div>
			<h1 className="uppercase truncate font-semibold mt-2">{title}</h1>
		</div>
	);
};
