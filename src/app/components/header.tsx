import Navigation from "./navigation"

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Site Logo</div>
        <nav className="space-x-4">
          <Navigation />
        </nav>
      </div>
    </header>
  )
}