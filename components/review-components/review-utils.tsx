import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

export const formatDate = (dateString: string) => {
	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	};
	return new Date(dateString).toLocaleDateString(undefined, options);
};

export const RenderStars = ({ rating }: { rating: number }) => {
	const numRating = rating;

	// Ensure numRating is a finite number between 0-5
	if (isNaN(numRating) || numRating < 0 || numRating > 5) {
		return null; // or handle invalid ratings differently
	}

	const fullStars = Math.floor(numRating);
	const hasHalfStar = numRating % 1 >= 0.5;
	const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

	return (
		<div className='flex'>
			{[...Array(fullStars)].map((_, i) => (
				<FaStar key={`full-${i}`} className='text-yellow-400 w-5 h-5' />
			))}
			{hasHalfStar && <FaStarHalfAlt className='text-yellow-400 w-5 h-5' />}
			{[...Array(emptyStars)].map((_, i) => (
				<FaRegStar key={`empty-${i}`} className='text-yellow-400 w-5 h-5' />
			))}
		</div>
	);
};
