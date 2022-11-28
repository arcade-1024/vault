import React from "react";
export interface SectionHeaderInterface {
	title: string;
}
const SectionHeader = ({ title }: SectionHeaderInterface) => {
	return (
		<div className="flex items-center justify-between text-white">
			<h1 className="uppercase font-semibold text-2xl">{title}</h1>
			<p className="font-semibold text-xl">see all</p>
		</div>
	);
};

export default SectionHeader;
