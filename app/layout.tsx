import "./globals.css";
import { Footer, Navbar } from "@/components/organisms";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="flex justify-center items-center pt-10 pb-20 px-20 md:bg-background-image">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
