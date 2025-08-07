import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-6">The page you are looking for does not exist.</p>
      <Link href="/" className=" hover:underline text-accent">
        Go back to home
      </Link>
    </div>
  );
}