import RatingComponent from '@components/RatingComponent';

import './index.scss';

const CustomerReviews = () => {
	const REVIEWS = [
		{
			name: 'Rosalee',
			reviews:
				'I gotta say, this course is a game-changer! It’s chock-full of amazing sentences to send or tell to your guy, and the insights into the way men think and act are totally worth the pric...',
			grade: "4.6",
		},
		{
			name: 'Clara',
			reviews:
				'I’m totally digging this plan! It’s all about understanding men and their psychology, rather than just guessing what’s going on in their heads. And it’s not just about saying th...',
			grade: "4.8",
		},
		{
			name: 'Stephanie',
			reviews:
				'Okay, I gotta admit, I’m a bit shy when it comes to guys. But this course breaks things down into easy steps and gives you the confidence to put yourself out there. I even...',
			grade: "5.0",
		},
	];

	return (
		<div className="reviews-container">
			{[...REVIEWS, ...REVIEWS ].map((item, index) => (
				<div
					key={index}
					className='reviews-container__item'
				>
					<div className="reviews-container__item__block">
						<h3>{item.name}</h3>
						<RatingComponent rating={item.grade} />
					</div>
					<p>{item.reviews}</p>
				</div>
			))}
		</div>
	);
};

export default CustomerReviews
