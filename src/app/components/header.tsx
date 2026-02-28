import Navigation from "./navigation";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <>
      {/* Main header */}
      <header className="bg-gray-900 text-white">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <span className="sr-only">Site Logo</span>

              <Image
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt="Logo"
                width={32}
                height={32}
              />

              <span className="font-bold text-xl">Site Logo</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            <Navigation />

            <Link
              href="/about"
              className="text-sm font-semibold text-white hover:text-gray-300"
            >
              About
            </Link>

            <Link
              href="/blog"
              className="text-sm font-semibold text-white hover:text-gray-300"
            >
              Blog
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="size-6"
              >
                <path
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}