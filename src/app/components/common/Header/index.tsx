import React from 'react';
import { useNavigate } from "react-router-dom";

import { NEGATIVE_INDEX } from "@/app/constants";

import logo from "@static/images/logo/logo.svg";
import back from "@static/images/others/back.svg";

import "./index.scss"

const Header:React.FC<{isHiddenNavigation: boolean}> = ({ isHiddenNavigation }) => {
	const nav = useNavigate()
	return (
			<div>
				{!isHiddenNavigation && <div className="header__progress">
					<div className={`header__progress__bar-${25}`}></div>
				</div>}
				<div className={`header ${isHiddenNavigation && "center"}`}>
					{
						!isHiddenNavigation &&
						<button className="header__back-btn" onClick={()=> nav(NEGATIVE_INDEX)}>
						<img src={back} alt={"back"} loading={"lazy"}/>
					</button>
					}
					<div className="header__container">
						<img src={logo} alt={"logo"} className={"header__logo"} loading={"lazy"} />
						<h1>Affemity</h1>
					</div>
					{!isHiddenNavigation && <span className="header__pages-count"><strong>1</strong>/34</span>}
				</div>
			</div>
	);
};

export default Header;
