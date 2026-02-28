import Link from "next/link"

export default function navigation() {
    return (
        <>
            <ul className="main-nav">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/about" className="hover:underline">About</Link></li>
                <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            </ul>
        </>
    )
}