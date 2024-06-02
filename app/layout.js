import Navigation from "@/app/components/Navigation";
import Logo from "@/app/components/Logo";

export const metadata = {
  title: "Next Cabinly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
