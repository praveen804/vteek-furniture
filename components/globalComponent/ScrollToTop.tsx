import React, { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';
const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const scrollFunction = () => {
		if (window.scrollY > 100) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', scrollFunction);
		return () => window.removeEventListener('scroll', scrollFunction);
	}, []);

	return (
		<div>
			<button
				type='button'
				className={`fixed bottom-4 right-4   px-4 py-4 rounded-full shadow-lg hover:bg-custom-2 transition-colors duration-300 ${
					isVisible ? 'bg-custom-1' : 'bg-gray-400'
				}`}
				onClick={scrollToTop}
			>
				<FiArrowUp />
			</button>
		</div>
	);
};

export default ScrollToTop;
