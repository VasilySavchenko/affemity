import React, { useState } from 'react';

import './index.scss';

type CheckboxProps = {
	title: string;
	icon: string;
	toggleCheckbox: (value: string) => void,

}

const CustomCheckbox: React.FC<CheckboxProps> = ({ title, icon , toggleCheckbox  }) => {
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = () => {
		toggleCheckbox(title)
		setIsChecked(!isChecked);
	};


	return (
		<div className={`custom-checkbox ${isChecked ? 'checked' : ''}`}>
			<div className="custom-checkbox__container">
				<img src={icon} alt={"emoji"} loading={"lazy"}/>
				<span className="title">{title}</span>
			</div>
			<div>
				<input
					checked={isChecked}
					id={`checkbox${title}`}
					onChange={handleCheckboxChange}
					className="checkbox-custom"
					name={`checkbox${title}`}
					type="checkbox" />
					<label
						htmlFor={`checkbox${title}`}
						className="checkbox-custom-label">

					</label>
			</div>
		</div>
	);
};

export default CustomCheckbox;
