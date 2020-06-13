import React, { useState, useEffect } from "react";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
	// fetch your colors data from the server when the component mounts
	// set that data to the colorList state property
	const updateColors = useEffect(() => {
		axiosWithAuth()
			.get("/api/colors")
			.then((res) => {
				setColorList(res.data);
			})
			.catch((err) => console.log(err.response));
	}, []);
	return (
		<>
			<ColorList colors={colorList} updateColors={updateColors} />
			<Bubbles colors={colorList} />
		</>
	);
};

export default BubblePage;