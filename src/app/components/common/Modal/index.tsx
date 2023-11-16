import React from 'react';

import "./index.scss"

const Modal:React.FC<{ title: string , handleClick: () => void }> = ({title , handleClick}) => {
	return (
			<div className="modal-wrapper">
				<p className="modal-wrapper__description">To move forward, specify </p>
				<h2 className="modal-wrapper__title">{title}</h2>
				<div className="modal-wrapper__container">
					<button className="modal-wrapper__btn" onClick={handleClick}>NO</button>
					<button className="modal-wrapper__btn" onClick={handleClick}>YES</button>
				</div>
			</div>
	);
};

export default Modal;
