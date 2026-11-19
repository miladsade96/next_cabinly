import Navigation from "@/app/components/Navigation";
import Logo from "@/app/components/Logo";
import "./styles/globals.css";
export const metadata = { title: { default: "Cabinly — A little closer to nature", template: "%s | Cabinly" }, description: "Explore a collection of cabin stays in this Cabinly website preview." };
export default function RootLayout({ children }) {
 return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><header className="site-header"><div className="container header-inner"><Logo /><Navigation /></div></header><main id="main-content">{children}</main><footer className="site-footer"><div className="container footer-inner"><Logo /><p>Cabinly website preview. Photos and cabin details are sample content; online reservations are not enabled.</p></div></footer></body></html>;
}
