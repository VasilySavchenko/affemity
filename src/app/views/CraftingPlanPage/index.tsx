import React, { useState } from 'react';

import Progress from "@components/Progress";
import CustomerReviews from "@components/CustomerReviews";
import Header from "@components/common/Header";

import "./index.scss"

export type ProgressBarItem = {
	id: number;
	progress: number;
	barTitle: string;
	start: boolean;
	breakpoints: number;
	modalTitle: string;
};

const CraftingPlanPage = () => {
	const [progressItem, setProgressItem] = useState<ProgressBarItem[]>([
		{ id: 0, progress: 0, barTitle: "Setting goals", start: true, breakpoints: 50 , modalTitle : "Have you tried changing your love life before?" },
		{ id: 1, progress: 0, barTitle: "Adapting growth areas", start: false, breakpoints: 75 , modalTitle : "Do you prefer to have expert guidance?" },
		{ id: 2, progress: 0, barTitle: "Picking content", start: false, breakpoints: 75 , modalTitle : "Do you lack consistency?" },
		{ id: 3, progress: 0, barTitle: "Prioritizing challenges", start: false, breakpoints: 75 , modalTitle : "Are you open to self-improvement?" }
	]);


	const updateProgress = (itemId: number) => {
			setProgressItem((prevItems) =>
				prevItems.map((item) =>
					item.id === itemId ? { ...item, progress: item.progress + 1 } : item
				)
			);
		};

	const setNextItemStart = (index: number) => {
		setProgressItem((prevItems) =>
			prevItems.map((item, i) =>
				i === index ? { ...item, start: true } : item
			)
		);
	};

	return (
		<div className="crafting-plan">
			<Header isHiddenNavigation={true}/>
			<h2 className="crafting-plan__title">
				We are crafting your<br/>personalized plan
			</h2>
			{progressItem.map((item , index)=> {
				return <Progress
					key={item.id}
					index={index}
					setNextItemStart={setNextItemStart}
					item={item}
					updateProgress={updateProgress}/>
			})}
			<CustomerReviews/>
		</div>
	);
};

export default CraftingPlanPage;
