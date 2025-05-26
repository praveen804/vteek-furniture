'use client';
export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4">
      <div className="loader"></div>
    </div>
  );
}
