import React from 'react';

import chart from "@/app/static/images/others/growth-chart.svg"

import "./index.scss"

const GrowthChart = () => {
	return (
			<div className="container">
				<img src={chart} loading={"lazy"} alt={"gra"}/>
			</div>
	);
};

export default GrowthChart;
