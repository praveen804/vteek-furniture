import { useEffect, useState } from 'react';

export default function useMediaQuery(query: string): boolean {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(query);
		setMatches(media.matches);
		const listener = () => setMatches(media.matches);
		media.addListener(listener);
		return () => media.removeListener(listener);
	}, [query]);

	return matches;
}

// const isSmall = useMediaQuery('(min-width: 640px)');    // sm
// const isMedium = useMediaQuery('(min-width: 768px)');   // md
// const isLarge = useMediaQuery('(min-width: 1024px)');   // lg
// const isXL = useMediaQuery('(min-width: 1280px)');      // xl
// const is2XL = useMediaQuery('(min-width: 1536px)');     // 2xl
