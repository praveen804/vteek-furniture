'use client';
import Image from 'next/image';


export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  console.log('🚀 ~ error.tsx:7 ~ error:', error);
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">Something went wrong!</h2>
      <div className="relative h-96 w-full max-w-sm md:max-w-md">
        <Image
          src="https://img.freepik.com/free-vector/glitch-error-404-page-background_23-2148083446.jpg?ga=GA1.1.1981182992.1741672061&semt=ais_hybrid&w=740"
          alt="errorImage"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-full w-full rounded-lg object-cover object-center"
        />
      </div>
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-lg bg-pink-500 px-4 py-2 text-white"
      >
        Try again
      </button>
    </div>
  );
}
