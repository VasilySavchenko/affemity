import React, { useEffect, useState } from 'react';

import './index.scss';

const RatingComponent: React.FC<{ rating: string }> = ({ rating }) => {
	const [customerRating, setCustomerRating] = useState<number[]>([]);

	const convertToRatingArray = (rating: number): number[] => {
		const integerPart = Math.floor(rating);
		const decimalPart = rating - integerPart;

		return Array.from({ length: 5 }, (_, index) =>
			index < integerPart
				? 1
				: index === integerPart
					? Math.round(decimalPart * 10) / 10
					: 0
		);
	};

	useEffect(() => {
		setCustomerRating(convertToRatingArray(Number(rating)))
	}, [rating]);

	return (
		<div className="rating-container">
		<div className="rating-container__wrapper">
			{customerRating.map((value, index) => (
				<div className="rating-container__block" key={index}>
					<div className="rating-container__block__item">
						<div
							className={`rating-square full`}
							style={{ width: `${value * 100}%` }}
						>
						</div>
					</div>
				</div>
			))}
		</div>
			<span className="rating-container__des">{rating}</span>
		</div>
	);
};

export default RatingComponent;
