import React from 'react'
import { useNavigate } from "react-router-dom";

import GrowthChart from "@components/GrowthChart";
import Header from "@components/common/Header";

import "./index.scss"


const MainPage = () => {
	const nav = useNavigate()

	return (
		<div className={"main-page"}>
			<div>
				<Header isHiddenNavigation={true}/>
				<h2 className="main-page__title">Change your <strong>love life</strong></h2>
				<p>with easy-to-use practical tips that <br/> you can apply in any situation</p>
			</div>
			<GrowthChart/>
			<div className="main-page__wrapper">
				<h3>What is your relationship <br/> status?</h3>
				<div className="main-page__container">
					<button
						className="main-page__container__btn"
						onClick={() => nav(`/questions/single`)}>
						Single
					</button>
					<button
						className="main-page__container__btn"
						onClick={() => nav(`/questions/relationship`)}>
						In a relationship
					</button>
				</div>
			</div>
		</div>
	);
};

export default MainPage;
