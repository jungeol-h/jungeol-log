// src/components/layout/Header.tsx
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link
            href="/"
            className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
          >
            준걸로그
          </Link>
        </h1>
        <ThemeToggle />
      </div>
    </header>
  );
}
