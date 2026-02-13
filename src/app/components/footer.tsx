export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center p-4 text-sm text-gray-600">
      <div className="max-w-6xl mx-auto">
        © {new Date().getFullYear()} My Dashboard. All rights reserved.
      </div>
    </footer>
  )
}
