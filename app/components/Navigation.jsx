"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const links = [["/", "Home"], ["/cabins", "Cabins"], ["/about", "About"], ["/account", "Your account"]];
export default function Navigation() {
 const path = usePathname(); const [open, setOpen] = useState(false);
 useEffect(() => { const close = (event) => { if (event.key === "Escape") setOpen(false); }; document.addEventListener("keydown", close); return () => document.removeEventListener("keydown", close); }, []);
 return <nav aria-label="Main navigation"><button className="nav-toggle" type="button" aria-controls="site-navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "Close menu" : "Menu"}</button><ul id="site-navigation" className={open ? "navigation is-open" : "navigation"}>{links.map(([href, label]) => <li key={href}><Link href={href} aria-current={path === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link></li>)}</ul></nav>;
}
