import Link from "next/link";

export function Header() {
  return (
    <nav className="max-w-5xl m-auto w-full px-4">
      <div className="flex items-center gap-8 justify-between py-4">
        <Link
          href={"/"}
          className="text-2xl font-semibold text-black hover:opacity-50"
        >
          Logo
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/#features"
            className="font-medium text-sm text-black hover:opacity-70"
          >
            Features
          </Link>
          <Link
            href="/#pricing"
            className="font-medium text-sm text-black hover:opacity-70"
          >
            Pricing
          </Link>
          <Link
            href="/#dashboard"
            className="font-medium text-sm text-white bg-black px-4 py-2 rounded-xl hover:opacity-70"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}
