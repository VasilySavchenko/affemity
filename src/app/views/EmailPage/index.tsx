import React from 'react';
import { useNavigate } from "react-router-dom";

import Button from "@components/common/Button";
import Header from "@components/common/Header";

import privacy from "@static/images/others/privacy.svg";

import useEmailValidation from "@/app/halpers/hook/useEmailValidation";

import "./index.scss"


const EmailPage = () => {
	const nav = useNavigate()
	const { email, isValid, handleEmailChange  } = useEmailValidation();

	const handleClick = ()=> {
		if (!email) {
			return
		}
		nav("/crafting-plan")
	}

	return (
		<div className="email-page">
			<Header isHiddenNavigation={true}/>
			<h2 className="email-page__title">You’re almost done!</h2>
			<p className="email-page__description">Please enter your email to see results</p>
			<input
				className={`email-page__input ${!isValid ? "error" : ""}`}
				onChange={(e) => handleEmailChange(e)}
				type={"text"}
				placeholder={"example@gmail.com"}/>
			<div className={"error__container"}>
				{!isValid && <p className={"error__message"}>Invalid email format</p>}
			</div>
			<Button isDisable={!isValid} title={"Get results"} onClick={handleClick}/>
			<div className="email-page__privacy">
				<img src={privacy} alt={"privacy"} loading={"lazy"}/>
				<p className="email-page__privacy__description">We respect your privacy and are committed to <br/>
					protecting your personal data. We’ll email you a copy <br/>
					of your results for convenient access.</p>
			</div>
		</div>
	);
};

export default EmailPage;
