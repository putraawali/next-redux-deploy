import Link from "next/link";

export default function Header() {
    return (
        <>
            <ul>
                <li>
                    <Link href="/increment">
                        <a>Increment</a>
                    </Link>
                </li>
                <li>
                    <Link href="/decrement">
                        <a>Decrement</a>
                    </Link>
                </li>
            </ul>
        </>
    );
}
