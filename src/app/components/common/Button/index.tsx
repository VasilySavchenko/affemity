import React from 'react';

import "./index.scss"

type ButtonProps = {
	title: string,
	onClick: () => void ,
	isDisable: boolean
}

const Button:React.FC<ButtonProps> = ({ title,onClick, isDisable}) => {
	return (
		<button disabled={isDisable} className="common-btn" onClick={onClick}>{title}</button>
	);
};

export default Button;
