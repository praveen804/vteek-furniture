'use client';

import { motion } from 'framer-motion';
import { AnimatedCardProps } from './types';

 const SettingAnimatedCard = ({
	children,
	className = '',
	key,
}: AnimatedCardProps) => (
	<motion.div
		key={key}
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		exit={{ opacity: 0, y: -20 }}
		transition={{ duration: 0.3 }}
		className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ${className}`}
	>
		{children}
	</motion.div>
);

export default SettingAnimatedCard