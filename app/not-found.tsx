import Image from 'next/image';
import { Link } from 'next-view-transitions';
export default function NotFound() {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center gap-3">
      <div className="relative h-96 w-full max-w-sm md:max-w-md">
        <Image
          src="/not-found.jpg"
          alt="errorImage"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-full w-full rounded-lg object-cover object-center"
          quality={75}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-3 py-3">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/" className="rounded-sm bg-pink-500 px-6 py-2 text-white">
          Return Home
        </Link>
      </div>
    </div>
  );
}
