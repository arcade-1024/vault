import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ChevronLeft, ChevronRight } from "react-feather";
const CarouselScreen = () => {
	return (
		<Carousel
			axis="horizontal"
			showThumbs={false}
			renderArrowNext={(
				clickHandler: () => void,
				hasNext: boolean,
				label: string
			) => {
				return (
					<button
						type="button"
						aria-label="next slide / item"
						className="control-arrow control-next"
						onClick={clickHandler}
					>
						<ChevronRight size={35} />
					</button>
				);
			}}
			renderArrowPrev={(
				clickHandler: () => void,
				hasNext: boolean,
				label: string
			) => {
				return (
					<button
						type="button"
						aria-label="next slide / item"
						className="control-arrow control-prev"
						onClick={clickHandler}
					>
						<ChevronLeft size={35} />
					</button>
				);
			}}
			renderIndicator={(
				clickHandler: (
					e:
						| React.MouseEvent<Element, MouseEvent>
						| React.KeyboardEvent<Element>
				) => void,
				isSelected: boolean,
				index: number,
				label: string
			) => <div onClick={clickHandler} className={`dot ${isSelected && 'bg-white opacity-100 selected'}`}></div>}
		>
			<div className="h-[330px] w-[800px] bg-gray-600"></div>
			<div className="h-[330px] w-[800px] bg-red-600"></div>
			<div className="h-[330px] w-[800px] bg-green-600"></div>
		</Carousel>
	);
};

export default CarouselScreen;
