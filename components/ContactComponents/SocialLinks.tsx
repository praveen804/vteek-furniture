import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin,} from "react-icons/fa";
export const SocialLinks = () => (
	<div className='bg-white p-8 rounded-lg shadow-lg space-y-6'>
		<h2 className='text-2xl font-semibold text-gray-800'>Follow Us</h2>
		<div className='flex space-x-6'>
			<Link href='#' className='hover:opacity-80 transition duration-300'>
				<FaFacebook className='text-pink-600 text-3xl' />
			</Link>
			<Link href='#' className='hover:opacity-80 transition duration-300'>
				<FaInstagram className='text-pink-600 text-3xl' />
			</Link>
			<Link href='#' className='hover:opacity-80 transition duration-300'>
				<FaTwitter className='text-pink-400 text-3xl' />
			</Link>
			<Link href='#' className='hover:opacity-80 transition duration-300'>
				<FaLinkedin className='text-pink-700 text-3xl' />
			</Link>
		</div>
	</div>
);
