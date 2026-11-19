import Link from "next/link";
import Image from "next/image";
export default function Logo() { return <Link href="/" className="logo" aria-label="Cabinly home"><Image height={46} width={46} alt="" src="/logo.png" /><span>Cabinly</span></Link>; }
