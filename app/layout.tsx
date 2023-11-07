import TanstackProvider from "@/util/TanstackProvider";
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
        <TanstackProvider>
          <Navbar />
          <div className="flex justify-center items-center md:pt-10 pb-20 md:px-20 md:bg-background-image">
            {children}
          </div>
          <Footer />
        </TanstackProvider>
      </body>
    </html>
  );
}
