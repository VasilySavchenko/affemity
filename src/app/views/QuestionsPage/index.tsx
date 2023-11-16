import React, { useState } from 'react';

import { useNavigate, useParams } from "react-router-dom";

import CustomCheckbox from "@components/common/CustomCheckBox";
import Button from "@components/common/Button";
import Header from "@components/common/Header";

import smiling from "@/app/static/images/emojis/smiling.svg"
import celebration from "@/app/static/images/emojis/celebration.svg"
import lightning from "@/app/static/images/emojis/lightning.svg"
import happiness from "@/app/static/images/emojis/happiness.svg"
import thumbsUp from "@/app/static/images/emojis/thumbsUp.svg"

import "./index.scss"


const QuestionsPage = () => {
	const [questions, setQuestions] = useState<string[]>([])
	const { id } = useParams()
	const nav = useNavigate()

	const QUESTIONS_DATA = [
		{ title: `Skill1_${id}`, icon: celebration },
		{ title: `Skill2_${id}`, icon: smiling },
		{ title: `Skill3_${id}`, icon: lightning },
		{ title: `Skill4_${id}`, icon: happiness },
		{ title: `Skill5_${id}`, icon: thumbsUp },

	]

	const toggleCheckbox = (value: string) => {

		if (questions.includes(value)) {
			setQuestions(prevState => prevState.filter((item: string) => item !== value))

		}
		else setQuestions(prevState => [...prevState, value])

	}

	return (
		<div className="questions">
			<div className="questions__block">
				<Header isHiddenNavigation={false}/>
			</div>
			<div className="questions__block">
				<h2>What would you like<br/> to learn?</h2>
				<p>Select all that apply</p>
			</div>
			<div className="questions__block questions-wrapper">
						{
							QUESTIONS_DATA.map((item,index) =>
								<CustomCheckbox
									key={index}
									title={item.title}
									icon={item.icon}
									toggleCheckbox={toggleCheckbox}/>)
						}
			</div>
			<div className="questions__block">
				<Button isDisable={!questions.length} title={"Continue"} onClick={() => nav("/email")}/>
			</div>
		</div>
	);
};

export default QuestionsPage;
