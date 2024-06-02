import Navigation from "@/app/components/Navigation";

export const metadata = {
  title: "Next Cabinly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
