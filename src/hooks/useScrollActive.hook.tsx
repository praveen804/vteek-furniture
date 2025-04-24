'use client';

import { useEffect, useState } from 'react';

const useScrollActive = (threshold: number = 50): boolean => {
	const [scrollActive, setScrollActive] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrollActive(window.scrollY > threshold);
		};

		handleScroll(); // Check once on mount

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [threshold]);

	return scrollActive;
};

export default useScrollActive;
