import React, { useEffect, useState } from "react";
import slide1 from "../../../images/slide-images/slide1.png";
import slide2 from "../../../images/slide-images/slide2.png";

const Slider = () => {
	const images = [slide1, slide2];
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const lastIndex = images.length - 1;
		if (index < 0) {
			setIndex(lastIndex);
		}
		if (index > lastIndex) {
			setIndex(0);
		}
	}, [index]);

	useEffect(() => {
		const slider = setInterval(() => {
			setIndex(index + 1);
		}, 3000);
		return () => {
			clearInterval(slider);
		};
	}, [index]);

	return (
		<div>
			<img width="100%" height="400px" src={images[index]} alt="" />
		</div>
	);
};

export default Slider;
