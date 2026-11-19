import Link from "next/link";
export const metadata = { title: "Your account" };
export default function Page() { return <section className="container page-section account-panel"><p className="eyebrow">Your guest space</p><h1 className="page-title">Guest accounts are coming soon.</h1><p className="page-intro">There is no account service connected to this preview, so sign-in and reservation management are not available yet.</p><p>You can still explore the cabins without creating an account.</p><Link className="button" href="/cabins">Browse the cabins</Link></section>; }
